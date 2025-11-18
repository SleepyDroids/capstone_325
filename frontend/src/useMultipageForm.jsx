import { useState } from "react";

export function useMultipageForm(pages) {
  // Pages arguement is an array of steps

  // useState to track which page of the form we are on, should be initialized to the first page
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // util functions to go backwards and forwards in the form
  function next() {
    setCurrentPageIndex((prev) => {
      // If I am at the last page in the form, return the index of where I am at presently
      if (prev >= pages.length - 1) return prev;
      return prev + 1;
    });
  }

  function back() {
    // If I've reached back around to the first page of the form, return the index of where I am at presently
    setCurrentPageIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  return {
    currentPageIndex,
    // returns which page I am currently on in the form
    page: pages[currentPageIndex],
    next,
    back,
    // Have the hook return the pages I pass in
    pages,
  };
}
