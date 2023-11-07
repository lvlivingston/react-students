import Score from "./Score";

export default function ScoreInformation({ name, bio, scoresArray }) {
  const scores = scoresArray.map((s, idx) => (
    <Score studentDate={s.date} studentScore={s.score} key={idx} />
  ));
  return (
    <div>
      <h3>{name}</h3>
      <p>{bio}</p>
      <ul>{scores}</ul>
    </div>
  );
}
