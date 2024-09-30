import ToggleCurriculumn from "@/components/detail/ToggleCurriculumn";
import React from "react";

export default function Point1({ campData }) {
  return (
    <div>
      <ToggleCurriculumn data={campData?.curriculum} />
    </div>
  );
}
