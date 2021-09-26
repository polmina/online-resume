import Profile from "components/profile";
import Description from "components/description";
import Experience from "components/experience";
import MixButton from "components/mix-button";
import PaletteButton from "components/palette-button";

import Studies from "components/studies";
import VisitButton from "components/visit-button";

export default (key, pos) => {
  return {
    profile: <Profile pos={pos} />,
    description: <Description pos={pos} />,
    experience: <Experience pos={pos} />,
    "mix-button": <MixButton pos={pos} />,
    "palette-button": <PaletteButton pos={pos} />,
    studies: <Studies pos={pos} />,
    "visit-button": <VisitButton pos={pos} />,
  }[key];
};
