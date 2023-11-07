import ScoreInformation from "./ScoreInformation";

export default function StudentList({ students }) {
  const info = students.map((s, idx) => (
    <ScoreInformation
      name={s.name}
      bio={s.bio}
      scoresArray={s.scores}
      key={idx}
    />
  ));
  return <ol>{info}</ol>;
}
