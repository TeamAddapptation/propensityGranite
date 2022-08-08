function graniteFileUpload(hasImg) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("g__file-wrapper");

  const fileUploadContainer = document.createElement("div");
  fileUploadContainer.classList.add("drop-zone");
  wrapper.appendChild(fileUploadContainer);
  fileUploadContainer.addEventListener("click", (e) => {
    fileUpload.click();
  });
  fileUploadContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileUploadContainer.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    fileUploadContainer.addEventListener(type, (e) => {
      fileUploadContainer.classList.remove("drop-zone--over");
    });
  });
  if (hasImg) {
    const thumbImg = document.createElement("img");
    thumbImg.src = "#";
    thumbImg.id = "g__profile-img";
    thumbImg.classList.add("drop-zone__thumb");
    fileUploadContainer.appendChild(thumbImg);
  } else {
    const prompt = document.createElement("span");
    prompt.classList.add("drop-zone__prompt");
    prompt.innerHTML = `<i class="far fa-user" aria-hidden="true"></i>`;
    fileUploadContainer.appendChild(prompt);
  }

  const fileUpload = document.createElement("input");
  fileUpload.classList.add("drop-zone__input");
  fileUpload.type = "file";
  fileUpload.name = "FILE=Profile_Picture";
  fileUploadContainer.appendChild(fileUpload);

  const editText = document.createElement("div");
  editText.classList.add("g__edit-text");
  editText.innerText = "Edit Photo";
  fileUploadContainer.after(editText);
  editText.addEventListener("click", (e) => {
    fileUpload.click();
  });

  fileUpload.addEventListener("change", (e) => {
    if (fileUpload.files.length) {
      updateThumbnail(fileUploadContainer, fileUpload.files[0]);
    }
  });

  function updateThumbnail(fileUploadContainer, file) {
    let thumbnailElement = fileUploadContainer.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (fileUploadContainer.querySelector(".drop-zone__prompt")) {
      fileUploadContainer.querySelector(".drop-zone__prompt").remove();
    }

    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      fileUploadContainer.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }

  return wrapper;
}
