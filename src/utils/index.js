export const CookieOption = {
  expires: new Date(Date.now() + 24 * 6060 * 10000),
  httpOnly: false,
  secure: false, // Required for HTTPS cross-site
  sameSite: process.env.NODE_ENV === "development" ? "lax" : "none", // Required for cross-site cookies
};

export const ResetCookieOption = {
  expires: new Date(Date.now() - 24 * 6060 * 10000),
  httpOnly: false,
  secure: false, // Required for HTTPS cross-site
  sameSite: process.env.NODE_ENV === "development" ? "lax" : "none", // Required for cross-site cookies
};
