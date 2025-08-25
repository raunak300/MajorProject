// Notebook.jsx
import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RuledPage = React.forwardRef(
  ({ pageIndex, values, setValues, isEditing, setEditing }, ref) => {
    const LINE = 28;

    return (
      <div
        ref={ref}
        className="w-full h-full relative rounded-md shadow-sm border border-zinc-200 bg-white cursor-text"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent ${LINE - 1}px,
              rgba(0,0,0,0.08) ${LINE - 1}px,
              rgba(0,0,0,0.08) ${LINE}px
            )
          `,
          backgroundSize: `100% ${LINE}px`,
        }}
        onClick={(e) => {
          e.stopPropagation();
          setEditing(pageIndex); // focus typing on this page
        }}
      >
        {/* Red margin */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: 56,
            width: 2,
            background: "rgba(220, 38, 38, 0.8)",
          }}
        />

        {/* Always-mounted textarea */}
        <textarea
          autoFocus={isEditing === pageIndex}
          readOnly={isEditing !== pageIndex} // ⬅️ main fix
          value={values[pageIndex]}
          onChange={(e) => {
            const next = [...values];
            next[pageIndex] = e.target.value;
            setValues(next);
          }}
          className="absolute inset-0 w-full h-full bg-transparent outline-none resize-none text-[16px] leading-[28px] p-6 pt-6 pr-6"
          style={{
            paddingLeft: 72,
            color: isEditing === pageIndex ? "#111" : "#555",
            cursor: isEditing === pageIndex ? "text" : "pointer",
          }}
        />
      </div>
    );
  }
);

export default function Notebook() {
  const totalPages = 12;
  const [pages, setPages] = useState(Array(totalPages).fill(""));
  const [isEditing, setEditing] = useState(null);
  const bookRef = useRef(null);

  const flipPrev = () => {
    setEditing(null); // stop editing when flipping
    bookRef.current?.pageFlip().flipPrev();
  };
  const flipNext = () => {
    setEditing(null);
    bookRef.current?.pageFlip().flipNext();
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-100 py-8"
      onClick={() => setEditing(null)} // clicking outside stops editing
    >
      <HTMLFlipBook
        ref={bookRef}
        width={420}
        height={300}
        size="stretch"
        showCover={false}
        drawShadow
        maxShadowOpacity={0.5}
        flippingTime={900}
        useMouseEvents={false}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-md bg-white"
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <RuledPage
            key={i}
            pageIndex={i}
            values={pages}
            setValues={setPages}
            isEditing={isEditing}
            setEditing={setEditing}
          />
        ))}
      </HTMLFlipBook>

      {/* Navigation */}
      <div className="mt-6 flex gap-6 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            flipPrev();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition"
        >
          <ChevronLeft size={20} />
          Prev
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            flipNext();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="mt-3 text-sm text-zinc-600">
        Tip: Click a page to type continuously. Click outside to stop. Use arrows to flip.
      </p>
    </div>
  );
}
