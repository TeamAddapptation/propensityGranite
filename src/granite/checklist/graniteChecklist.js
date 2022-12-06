function graniteChecklist(jsonBlock) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = '#' + id;
  const graniteDiv = document.getElementById(id);
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/
    var checklistCss = document.createElement('style');
    checklistCss.id = 'g__css_' + id;
    checklistCss.innerHTML = `
    ${cssId}{
      width: 100%
    }
    `;
    let granite_css = document.getElementById('g__css_' + id);
    if (granite_css) {
      granite_css.remove();
    }
    document.head.appendChild(checklistCss);
  /*---------------------------------------------
  Main Wrapper
  ---------------------------------------------*/
  const checkWrapper = document.createElement('div');
  checkWrapper.classList.add('g__check-wrapper');
  /*---------------------------------------------
  Checklist Items
  ---------------------------------------------*/
  r.forEach((r, index) => {
    const checkItem = document.createElement('div');
    checkItem.classList.add('g__check-item');

    const checkContent = document.createElement('div');
    checkContent.classList.add('g__check-content');
    checkItem.appendChild(checkContent);

    const checkHeader = document.createElement('div');
    checkHeader.classList.add('g__check-header');
    checkContent.appendChild(checkHeader);

    if(r.status){
      const status = document.createElement('div');
      status.classList.add('g__check-status');
      status.classList.add(currentStatus(r, status));
      status.innerHTML = `<i class="fa fa-check" aria-hidden="true">`;
      checkHeader.appendChild(status);
    }
    if(r.title){
      const title = document.createElement('h6');
      title.classList.add('g__check-title');
      title.innerHTML = `${index + 1}. ${r.title}` || "No Title";
      checkHeader.appendChild(title);
    }
    if(r.desc){
      const desc = document.createElement('p');
      desc.classList.add('g__check-desc');
      desc.innerHTML = r.desc;
      checkContent.appendChild(desc);
    }

  if(r.href){
    const checkBtn = document.createElement('a');
    checkBtn.href = r.href;
    checkBtn.classList.add('g__btn', 'g__btn-neutral', 'g__btn-sm', 'g__mt-15');
    checkBtn.innerHTML = r.btn_text;
    checkContent.appendChild(checkBtn);
  }
  if(r.thumbnail_img){
    const checkThumbnail = document.createElement('a');
    checkThumbnail.href = r.thumbnail_url;
    checkThumbnail.target = "_blank";
    checkThumbnail.classList.add('g__check-thumbnail');
    checkItem.appendChild(checkThumbnail);

    const thumbnailImg = document.createElement('img');
    thumbnailImg.classList.add('g__thumbnail-img');
    thumbnailImg.src = r.thumbnail_img;
    checkThumbnail.appendChild(thumbnailImg);

    const playBtn = document.createElement('div');
    playBtn.classList.add('g__check-play-btn');
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    checkThumbnail.appendChild(playBtn);
  }
    

    checkWrapper.appendChild(checkItem);
  })
  




  graniteDiv.appendChild(checkWrapper);


  function currentStatus(r, status){
    let currentStats = "g__not-started";
    if(r.status == "In Progress"){
      currentStats = "g__in-progress"
    } else if (r.status == "Completed"){
      currentStats = "g__completed"
    }
    return currentStats
  }
}