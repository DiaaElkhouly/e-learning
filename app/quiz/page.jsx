"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  QuizIcon,
  AccessTimeIcon,
  HelpOutlineIcon,
  ArrowBackIcon,
  CheckCircleIcon,
  CancelIcon,
} from "@/components/icons";

// Sample quizzes data - moved outside component for better performance
const quizzesData = {
  "اللغة العربية": [
    {
      id: 1,
      title: "اختبار الوحدة الأولى - النصوص",
      questions: 10,
      duration: "30 دقيقة",
      description: "اختبار على نصوص الوحدة الأولى",
    },
    {
      id: 2,
      title: "اختبار البلاغة",
      questions: 15,
      duration: "45 دقيقة",
      description: "اختبار البلاغة والنصوص الأدبية",
    },
  ],
  الرياضيات: [
    {
      id: 3,
      title: "اختبار الجبر",
      questions: 12,
      duration: "40 دقيقة",
      description: "اختبار على المعادلات والمتباينات",
    },
  ],
};

const sampleQuestions = [
  {
    question: "ما هو جمع كلمة كتاب؟",
    options: ["كتب", "كتبون", "كُتب", "كتاب"],
    correct: 0,
  },
  {
    question: "أي مما يلي اسم جمع؟",
    options: ["طالب", "طلاب", "طلبة", "طال"],
    correct: 2,
  },
  {
    question: "ما المضاد لكلمة ضيق؟",
    options: ["واسع", "ضيق", "عريض", "طويل"],
    correct: 0,
  },
];

// Question Component
function Question({ question, currentQuestion, answers, handleAnswer }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <HelpOutlineIcon className="w-5 h-5" />
        <span>
          سؤال {currentQuestion + 1} من {sampleQuestions.length}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`w-full p-4 rounded-xl border-2 text-right transition-all ${answers[currentQuestion] === index ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-gray-300"}`}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function QuizPageContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const subjectQuizzes =
    subject && quizzesData[subject] ? quizzesData[subject] : [];

  const handleAnswer = (answerIndex) =>
    setAnswers({ ...answers, [currentQuestion]: answerIndex });

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
    else setShowResults(true);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const calculateScore = () => {
    let score = 0;
    sampleQuestions.forEach((q, index) => {
      if (answers[index] === q.correct) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedQuiz(null);
  };

  // No subject selected - show quiz list
  if (!subject) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              الاختبارات والتمارين
            </h1>
            <p className="text-lg text-gray-600">
              اختر المادة لعرض الاختبارات المتاحة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(quizzesData).map(([subjectName, quizzes]) => (
              <div
                key={subjectName}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl">
                    📝
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {subjectName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {quizzes.length} اختبار
                    </p>
                  </div>
                </div>
                <Link
                  href={`/quiz?subject=${encodeURIComponent(subjectName)}`}
                  className="btn-primary w-full text-center block py-3"
                >
                  عرض الاختبارات
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // No quiz selected - show quiz list for subject
  if (!selectedQuiz) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/quiz">
            <button className="btn-secondary mb-6 inline-flex items-center gap-2">
              <ArrowBackIcon className="w-5 h-5" />
              العودة للاختبارات
            </button>
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              اختبارات {subject}
            </h1>
            <p className="text-lg text-gray-600">اختر اختباراً للبدء</p>
          </div>
          {subjectQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjectQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                      <QuizIcon className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {quiz.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <span>{quiz.questions} سؤال</span>
                        <span>•</span>
                        <span>{quiz.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                  <button
                    onClick={() => setSelectedQuiz(quiz)}
                    className="btn-primary w-full text-center block py-3"
                  >
                    بدء الاختبار
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpOutlineIcon className="text-gray-300 w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                لا توجد اختبارات لهذه المادة بعد
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show results
  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{percentage >= 50 ? "🎉" : "💪"}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              نتيجة الاختبار
            </h2>
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {percentage}%
            </div>
            <p className="text-gray-600 mb-6">
              أجبت على {score} من {sampleQuestions.length} سؤال بشكل صحيح
            </p>
            <div className="space-y-3 mb-8">
              {sampleQuestions.map((q, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${answers[index] === q.correct ? "bg-green-50" : "bg-red-50"}`}
                >
                  <span className="text-gray-700">سؤال {index + 1}</span>
                  {answers[index] === q.correct ? (
                    <CheckCircleIcon className="text-green-600 w-6 h-6" />
                  ) : (
                    <CancelIcon className="text-red-600 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={resetQuiz} className="btn-primary flex-1 py-3">
                إعادة الاختبار
              </button>
              <Link
                href="/quiz"
                className="btn-secondary flex-1 py-3 text-center block"
              >
                اختيار اختبار آخر
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show quiz questions
  const question = sampleQuestions[currentQuestion];
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {selectedQuiz.title}
            </h2>
            <div className="flex items-center gap-2 text-gray-500">
              <AccessTimeIcon className="w-5 h-5" />
              <span>{selectedQuiz.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {sampleQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${currentQuestion === index ? "bg-blue-600 text-white" : answers[index] !== undefined ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <Question
          question={question}
          currentQuestion={currentQuestion}
          answers={answers}
          handleAnswer={handleAnswer}
        />
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="btn-secondary py-2 px-4 disabled:opacity-50"
          >
            السابق
          </button>
          <button onClick={handleNext} className="btn-primary py-2 px-4">
            {currentQuestion === sampleQuestions.length - 1
              ? "إنهاء"
              : "التالي"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-20 pb-12 px-4 text-center">
          جار التحميل...
        </div>
      }
    >
      <QuizPageContent />
    </Suspense>
  );
}
