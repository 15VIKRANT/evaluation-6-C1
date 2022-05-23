import styles from "./CandidateCard.module.css";

function CandidateCard({name,avatar,salary,company_name,title}) {

  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" src={avatar} />
      <div>
        <div>Name:{name}</div>
        <div>{title} & {company_name}</div>
      </div>
      <div>${salary}</div>
    </div>
  );
}

export default CandidateCard;
