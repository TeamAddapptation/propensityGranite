const adBlock = {
  size: "300x250",
  name: "",
  container: [
    {
      name: "background",
      src: "",
      width: "",
      height: "",
      inset: "",
      border_with: "",
      border_color: "",
      border_style: ""
    },
    {
      name: "logo",
      src: "",
      width: "",
      height: "",
      inset: "",
      border_with: "",
      border_color: "",
      border_style: ""
    },
    {
      name: "primaryText",
      text: "This is the primary text block",
      font_size: "18px",
      line_height: "",
      color: "",
    },
    {
      name: "secondaryText",
      text: "This is the primary text block",
      font_size: "18px",
      line_height: "",
      color: "",
    },
    {
      name: "cta",
      text: "This is the primary text block",
      font_size: "18px",
      font_family: "Times New Roman",
      line_height: "",
      color: "",
    }
  ]
}


// const adBlock = {
//   size: "300x250",
//   name: "",
//   background:{
//       width: "300px",
//       height: "250px",
//       inset: "0 0 0 0",
//       border_with: "1px",
//       border_color: "red",
//       border_style: "solid",
//       components: [
//         {
//           name: "logo",
//           src: "",
//           width: "",
//           height: "",
//           inset: "",
//           border_with: "",
//           border_color: "",
//           border_style: ""
//         },
//         {
//           name: "primaryText",
//           text: "This is the primary text block",
//           font_size: "18px",
//           line_height: "",
//           color: "",
//         },
//         {
//           name: "secondaryText",
//           text: "This is the primary text block",
//           font_size: "18px",
//           line_height: "",
//           color: "",
//         },
//         {
//           name: "cta",
//           text: "This is the primary text block",
//           font_size: "18px",
//           font_family: "Times New Roman",
//           line_height: "",
//           color: "",
//         }
//       ]
//     },
//   }



// adBlock.components.forEach(comp => {
//   console.log("Component: ",  comp.name)
//   for (const [key, value] of Object.entries(comp)) {
//     let cssProperty = ""
//     if(key.includes("_")){
//       cssProperty = key.replace("_", "-");
//     } else {
//       cssProperty = key;
//     }
//     console.log(`${cssProperty}: ${value}`);
//   }
// })


const backgroundDiv = document.createElement('div');
backgroundDiv.classList.add('ge_background');
let cssString = ""
for (const [key, value] of Object.entries(adBlock.background)) {
  if(key !== ("components" || "src")){
    let cssProperty = ""
    if(key.includes("_")){
      cssProperty = key.replace("_", "-");
    } else {
      cssProperty = key;
    }
    backgroundDiv.style.cssText += `${cssProperty}:${value};`
    cssString += `${cssProperty}: ${value};`
    console.log(`${cssProperty}:${value}`);
  }
}
console.log(cssString)
console.log(backgroundDiv)

document.getElementById('ad-example').appendChild(backgroundDiv)