import React, { useEffect, useState } from "react";
import ChipsArray from "./ChipsArray";
import Button from "@mui/material/Button";
import CreateQuestions from "./CreateQuestions";

const TextSelection = () => {
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);
  const [texts, setTexts] = useState([]);
  const [questions, setQuestions] = useState(false);

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const x = rect.left + rect.width / 2;

      const y = rect.top - 35;
      
      setSelectionPosition({ x, y });
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  const handleClick = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (!texts.includes(selectedText) && selectedText.length > 0) {
      setTexts((prevTexts) => [...prevTexts, selectedText]);
    }
  };

  const handleComprehensionClick = () => {
    setQuestions(true);
  };
  return (
    <div className="p-7 m-20 mb-0 rounded-lg">
      <div className="bg-white p-7 rounded-2xl ">
        <div>
          {showButton && !questions && (
            <button
              className="floating-button"
              style={{ left: selectionPosition.x, top: selectionPosition.y }}
              onClick={handleClick}
            >
              Add To List
            </button>
          )}
          <p>
            Many United States companies have, unfortunately, made the search
            for legal protection from import competition into a major line of
            work. Since 1980 the United States International Trade Commission
            (ITC) has received about 280 complaints alleging damage from imports
            that benefit foreign governments’ subsidies. Another 340 charge that
            foreign companies “dumped” their products in the United States at
            “less than fair value.” Even when no unfair practices are alleged,
            the simple claim that an industry has been injured by imports is
            sufficient grounds to seek relief. Contrary to the general
            impression, this quest for import relief has hurt more companies
            than it has helped. As corporations begin to function globally, they
            develop an intricate web of marketing, production, and research
            relationships, The complexity of these relationships makes it
            unlikely that a system of import relief laws will meet the strategic
            needs of all the units under the same parent company.
            Internationalization increases the danger that foreign companies
            will use import relief laws against the very companies the laws were
            designed to protect. Suppose a United States-owned company
            establishes an overseas plant to manufacture a product while its
            competitor makes the same product in the United States. If the
            competitor can prove injury from the imports—and that the United
            States company received a subsidy from a foreign government to build
            its plant abroad—the United States company’s products will be
            uncompetitive in the United States, since they would be subject to
            duties. Perhaps the most brazen case occurred when the ITC
            investigated allegations that Canadian companies were injuring the
            United States salt industry by dumping rock salt, used to de-ice
            roads. The bizarre aspect of the complaint was that a foreign
            conglomerate with United States operations was crying for help
            against a United States company with foreign operations. The “United
            States” company claiming the injury was a subsidiary of a Dutch
            conglomerate. In contrast, the “Canadian” companies included a
            subsidiary of a Chicago firm that was the second-largest domestic
            producer of rock salt.
          </p>
          {/* Conditionally showing questions and list of words  */}
          {!questions && (
            <div className="main-container">
              {texts.length > 0 && (
                <>
                  <div className="list-container mt-6">
                    <p>Your lists</p>
                    <div className="text-container">
                      <ChipsArray texts={texts} setTexts={setTexts} />
                    </div>
                  </div>
                  <div className="comprehension-btn">
                    <button onClick={handleComprehensionClick}>
                      check your comprehension
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        {questions && (
          <div className="main-container p-7 mt-10 rounded-2xl">
            {questions && (
              <div>
                <CreateQuestions texts={texts} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSelection;
