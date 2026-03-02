import React from "react";

export default function Form() {
  const [submit, setSubmit] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true); // Set loading state

    try {
      const formData = new FormData();
      formData.append("Email", email);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx4-v51xgbcHU9PbJTARSXMzyPgtBY7wzJ2ep99nOg7dzOyfTPItMq3hFSKZpBnAsyEQA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        // Keep submit state as true to show success message
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmit(false); // Reset state on error
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className=" w-full justify-center items-center flex flex-col mt-20 ">
      <div className="p-10 bg-black/50 w-full md:w-1/2 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbx4-v51xgbcHU9PbJTARSXMzyPgtBY7wzJ2ep99nOg7dzOyfTPItMq3hFSKZpBnAsyEQA/exec"
          // action="https://script.google.com/macros/s/AKfycbzq_PdFjZkfCSuZvabf44Wo24FBQLk9LMkaiZLTVPKXrrWbbQoZl4_Pw9gnG74AePiHNw/exec"
        >
          <label className="font-bold text-center text-3sm md:text-lg  lg:text-3xl">
            MoreVocab Tester Register
          </label>

          <input
            className="rounded-xl p-2 border-1"
            name="Email"
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn" type="submit" disabled={submit}>
            {submit ? "Submitted ✓" : "Submit"}
          </button>
        </form>
        {submit ? (
          <div className="mt-10">
            <p className="text-center text-sm lg:text-xl">
              <p>Thanks for your Help! Now You have to go to</p>
              <a
                href="https://play.google.com/apps/testing/com.morevocab.app"
                className="underline hover:pointer"
              >
                https://play.google.com/apps/testing/com.morevocab.app
              </a>
              <p>or click link below</p>
            </p>
            <a
              className="btn w-full mt-5 text-xs md:text-sm lg:text-lg"
              href="https://play.google.com/apps/testing/com.morevocab.app"
            >
              MoreVocab App Testing
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
