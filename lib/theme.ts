export const getThemeByWeatherName = (theme: string) => {
  const lowerTheme = theme.toLowerCase();
  if (lowerTheme.includes("mist")) {
    return "mist";
  } else if (lowerTheme.includes("few clouds")) {
    return "few-clouds";
  } else if (lowerTheme.includes("broken clouds")) {
    return "broken-clouds";
  } else if (lowerTheme.includes("clouds")) {
    return "clouds";
  }
};
