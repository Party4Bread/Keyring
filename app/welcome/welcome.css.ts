import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
  paddingTop: "4rem",
  paddingBottom: "1rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  "@media": {
    "(max-aspect-ratio: 1/1)": {
      flexDirection: "column",
      gap: "2rem",
      paddingTop: "2rem"
    }
  }
});


export const column = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem", // gap-16
  minHeight: 0,
});

export const profileColumn = style([
  column,
  {
    flex: 1,
  }
]);

export const editorColumn = style([
  column,
  {
    flex: 2,
    alignItems: "flex-start"
  }
]);

export const section = style({
  width: "100%",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem", // space-y-6
});

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
});
export const input = style({
  width: "100%",
  height: "2.5rem",
  padding: "0.5rem",
  borderRadius: "0.375rem",
  border: "1px solid #e2e8f0",
  backgroundColor: "#fff",
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: "#1f2937",
      borderColor: "#374151",
      color: "#fff",
    }
  },
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 1px #3b82f6",
  },
});


export const label = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#4b5563",
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: "#9ca3af" 
    }
  }
}); 

export const submitButton = style({
  width: "100%",
  height: "2.5rem",
  padding: "0.5rem",
  borderRadius: "0.375rem",
  backgroundColor: "#f70",
  cursor: "pointer",
  color: "#fff",
  fontWeight: "500",
  fontSize: "0.875rem"
});

