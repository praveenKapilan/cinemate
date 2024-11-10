import { useEffect } from "react";

export const useTitle = () => {
    useEffect((title) => {
        document.title = `${title}/cinemate`
    })
  return null;
}
