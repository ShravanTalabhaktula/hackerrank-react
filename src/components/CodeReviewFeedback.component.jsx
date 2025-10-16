function CodeReviewFeedbackComponent() {
  // Performance
  // Security
  // Documentation
  // Testing
  return (
    <>
      <h3>Code Review Feedback</h3>

      <div className={"my-0 mx-auto text-center w-mx-1200"}>
        <div className={"flex wrap justify-content-center mt-30 gap-30"}>
          <div className={"pa-10 w-300 card"}>
            <h2>Readability</h2>
            <div className={"flex my-30 mx-0 justify-content-around"}>
              <button className={"py-10 px-15"}>
                Upvote
              </button>
              <button className={"py-10 px-15 danger"}>
                Downvote
              </button>
            </div>
            <p className={"my-10 mx-0"}>
              Upvotes: <strong>{0}</strong>
            </p>
            <p className={"my-10 mx-0"}>
              Downvotes: <strong>{0}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CodeReviewFeedbackComponent;