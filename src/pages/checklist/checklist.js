import graniteChecklist from "../../granite/checklist/graniteChecklist";
import "../../granite/checklist/graniteChecklist.css"

const checkListDemo = {
  id: "checklist__demo",
  options: {
  },
  records: [
    {
      status: "Not Started",
      title: "Select Playbook",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc nunc ipsum sapien ac mattis egestas nibh cursus adipiscing. Id enim eget vitae mauris. Elementum enim vulputate sollicitudin feugiat tincidunt neque. Convallis ut nibh lacus ornare faucibus a. Morbi aliquet leo dignissim praesent. Sollicitudin sed pellentesque turpis sed ullamcorper euismod id ultrices.",
      btn_text: "Update Playbook",
      href: "#"
    },
    {
      status: "In Progress",
      title: "Set Benchmark + Launch Date",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc nunc ipsum sapien ac mattis egestas nibh cursus adipiscing. Id enim eget vitae mauris. Convallis ut nibh lacus ornare faucibus a. Morbi aliquet leo dignissim praesent. Sollicitudin sed pellentesque turpis sed ullamcorper euismod id ultrices.",
      btn_text: "Update Campaign",
      href: "#"
    },
    {
      status: "Completed",
      title: "Connect Audience",
      desc: "Nunc nunc ipsum sapien ac mattis egestas nibh cursus adipiscing. Id enim eget vitae mauris. Elementum enim vulputate sollicitudin feugiat tincidunt neque. Convallis ut nibh lacus ornare faucibus a. Morbi aliquet leo dignissim praesent. Sollicitudin sed pellentesque turpis sed ullamcorper euismod id ultrices.",
      btn_text: "Manage Audience",
      href: "#"
    }
  ]
}


try{
  graniteChecklist(checkListDemo)
} catch (e){
  console.log(e)
}