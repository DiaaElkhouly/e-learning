// Lightweight SVG Icons - Replacement for MUI icons
// These are ~90% smaller than MUI icons

const IconWrapper = ({ children, className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// Basic Icons
export const BookIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </IconWrapper>
);

export const QuizIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </IconWrapper>
);

export const ArrowBackIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </IconWrapper>
);

export const SchoolIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="m4 6 8-4 8 4" />
    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
  </IconWrapper>
);

export const PlayCircleIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </IconWrapper>
);

export const PictureAsPdfIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </IconWrapper>
);

export const DownloadIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </IconWrapper>
);

export const AccessTimeIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconWrapper>
);

export const DescriptionIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 2h12 0 2a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </IconWrapper>
);

export const HelpOutlineIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </IconWrapper>
);

export const CheckCircleIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconWrapper>
);

export const CancelIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </IconWrapper>
);

export const NotificationsIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </IconWrapper>
);

export const MenuIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </IconWrapper>
);

export const CloseIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconWrapper>
);

// Additional Admin Icons
export const AddIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </IconWrapper>
);

export const EditIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </IconWrapper>
);

export const DeleteIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </IconWrapper>
);

export const DashboardIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="16" width="7" height="5" />
  </IconWrapper>
);

export const VideoLibraryIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </IconWrapper>
);

export const LogoutIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </IconWrapper>
);

export const PeopleIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconWrapper>
);

export const StarIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconWrapper>
);

export const TrendingUpIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </IconWrapper>
);

export const ArrowForwardIcon = ({ className = "", size = 24 }) => (
  <IconWrapper className={className} size={size}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconWrapper>
);

// Grade Icons
export const GradeIcon = ({ icon = "🎓", size = 48 }) => (
  <span style={{ fontSize: size }}>{icon}</span>
);

// Export all icons as named exports
export default {
  BookIcon,
  QuizIcon,
  ArrowBackIcon,
  SchoolIcon,
  PlayCircleIcon,
  PictureAsPdfIcon,
  DownloadIcon,
  AccessTimeIcon,
  DescriptionIcon,
  HelpOutlineIcon,
  CheckCircleIcon,
  CancelIcon,
  NotificationsIcon,
  MenuIcon,
  CloseIcon,
  AddIcon,
  EditIcon,
  DeleteIcon,
  DashboardIcon,
  VideoLibraryIcon,
  LogoutIcon,
  PeopleIcon,
  StarIcon,
  TrendingUpIcon,
  ArrowForwardIcon,
  GradeIcon,
};
