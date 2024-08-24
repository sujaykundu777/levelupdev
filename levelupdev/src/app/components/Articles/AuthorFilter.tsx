"use client";

import React, { useState } from "react";
import MultiSelectCheckbox from "../common/MultiSelectCheckbox";

const AuthorFilter = () => {
  const authorNames: string[] = [
    "John Doe",
    "Jane Doe",
    "John Smith",
    "Jane Smith",
  ];
  const [selectedAuthors, setAuthorsFilter] = useState<string[]>([]);
  return (
    <div>
      <div className="mb-6">
        <h2 className="pb-2">Filter by Authors</h2>
        <hr className="pt-4" />
        <MultiSelectCheckbox
          options={authorNames}
          selectedOptions={selectedAuthors}
          setSelectedOptions={setAuthorsFilter}
        />
      </div>
    </div>
  );
};

export default AuthorFilter;
