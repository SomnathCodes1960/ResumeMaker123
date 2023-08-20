

/*Resume Fill Area */

/*Add option For Social Links on resume Work Area */



let  optHandler=1;
function addOption(){
    if(optHandler<3){
       let addArea=document.getElementById("SocialLinks");
        let addHtml=`<div class="socialLinksDiv">
        <div class="linkName SocialLinksClass">
            <input type="text" name="linkName" class="ScLnkName"  placeholder="Link Name...">
        </div>
        <div class="WebLink SocialLinksClass">

            <input type="text" name="ScLink" class="ScLnkLink"  placeholder="Insert Link...">
        </div>
    </div>`;
    addArea.innerHTML+=addHtml;
    optHandler++;
    console.log(optHandler);
    }

}


var getBtn=document.getElementById("getPdf1");
function getPdfSave(){
    var ele=document.getElementById("resumeSection1");
    html2pdf().from(ele).save();
}
getBtn.addEventListener("click",getPdfSave);
let sectionCounter=0;


function nameChange(){
    var nmEntryVal=document.getElementById("nameEntryPF");
    let val=nmEntryVal.value;
    let res=val.toUpperCase();
    var nameEntry=document.getElementById("nameEntry");
    nameEntry.innerHTML=res;
  
    var locEntryPF=document.getElementById("LocEntryPF");
    let locVal=locEntryPF.value;
    let locEntry=document.getElementById("locEntry");
    locEntry.innerHTML=locVal;
  }

  

/* ----------------------------------------------*/








