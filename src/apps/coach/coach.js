import graniteCoach from '../../granite/coach/graniteCoach'
import '../../granite/coach/graniteCoach.css'

const coachJson = {
  id: "coach_steps",
  options: {

  }, 
  records: [
    {
      name: "Create Your Campaign",
      video: "",
      steps: [
        {
          youTube_iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/yyjG6v7jfa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
          step_name: "Select Playbook",
          timestamp: ["0:30", 30],
          description: "Choose a Playbook that best aligns with your goals."
        },
        {
          step_name: "Choose Launch Date",
          timestamp: ["1:06", 66],
          description: "Select a launch date for your campaign, this can easily be changed if your target launch date needs to be moved."
        },
        {
          step_name: "Identify Benchmarks",
          timestamp: ["1:50", 110],
          description: "Use our ROI calculator to help identify and calculate your benchmarks."
        }
      ]
    },
    {
      name: "Build Your Audiene",
      video: "",
      steps: [
        {
          step_name: "Define your target audience",
          timestamp: "",
          description: "Identify your target audience by selecting ICP details and intent data signals or create a look-a-like and we can do the work for you by identifying patterns from your best customers."
        },
        {
          step_name: "Edit Audience to focus your targeting",
          timestamp: "",
          description: "Review your account list and adjust it to meet your target audience size or refine the details that make up your list."
        },
        {
          step_name: "Create a Buying Circle",
          timestamp: "",
          description: "Identify your persona details by completing our simple buying circle form"
        },
        {
          step_name: "Refine buying circle",
          timestamp: "",
          description: "Edit your buying circle list and refine or broaden your audience based on the channels you will be using in your ABM campaign."
        }
        
      ]
    },
    {
      name: "Review and Edit Your Playbook",
      video: "",
      steps: [
        {
          step_name: "Review your plays",
          timestamp: "",
          description: "Look over the playbook plays to see the scope of your campaign."
        },
        {
          step_name: "Adjust dates",
          timestamp: "",
          description: "Drag-and-drop the plays to adjust the timing of your cadence."
        },
        {
          step_name: "Edit copy",
          timestamp: "",
          description: "Edit your automated copy to add your own touch. You can also add an alternative copy by changing the AI prompt."
        },
        {
          step_name: "Upload or create graphic assets",
          timestamp: "",
          description: "Create your graphic assets to run ads using our Graphic Designer or if you have a team that creates your own imagery, you can upload all creative assets easily."
        },
      ]
    },
    {
      name: "Set Up Your Channels",
      video: "",
      steps: [
        {
          step_name: "Connect audience",
          timestamp: "",
          description: ""
        },
        {
          step_name: "Add creative assets",
          timestamp: "",
          description: ""
        },
        {
          step_name: "Review",
          timestamp: "",
          description: ""
        },
        {
          step_name: "Send assets to selected channels",
          timestamp: "",
          description: ""
        },        
      ]
    },
    {
      name: "Measure and Manage",
      video: "",
      steps: [
        {
          step_name: "Track",
          timestamp: "",
          description: "Follow the progress of your ABM campaign and see how you are tracking against your benchmarks with our ABM Dashboard."
        },        
      ]
    }
  ]
}

graniteCoach(coachJson);