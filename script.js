let audiofile = [
    {
        "id": 0,
        "title": "Audio 0",
        "link": "https://sounds.pond5.com/keep-it-steppin-instrumental-vox-music-059188080_prev.m4a",
    },
    {
        "id": 1,
        "title": "Audio 1",
        "link": "https://sounds.pond5.com/cool-lofi-hip-hop-chill-music-118510708_prev.m4a",
    },
    {
        "id": 2,
        "title": "Audio 2",
        "link": "https://sounds.pond5.com/calm-relaxing-hip-hop-chill-music-120053400_prev.m4a",
    },
    {
        "id": 3,
        "title": "Audio 3",
        "link": "https://sounds.pond5.com/hip-hop-old-samples-beat-music-117990430_prev.m4a",
    },
    {
        "id": 4,
        "title": "Audio 4",
        "link": "https://sounds.pond5.com/hip-hop-samples-beat-music-108228380_prev.m4a",
    },  
    ]

        var html = ""
        audiofile.forEach(function(val) {
            
        html += `<div class="player-container" tabindex="100${val.id}"alt="${val.title}" data-id="${val.id}" data-title="${val.title}" data-link="${val.link}">
        <div class="player-top">
        <div class="title">${val.title}</div>
        <div class="id">#${val.id}</div></div>
        <div class="player"><div class="play-button"><div class="play"></div></div>
        <div class="waveform" "data-link="${val.link}" data-id="${val.id}" id="wave${val.id}"></div></div></div>`       
        document.querySelector("#audio-container").innerHTML = html}) 
    

    var playButton = document.querySelectorAll('.play-button')
    var container = document.querySelectorAll('.player-container')
    var wave = new Array

 /*var html2 = ""
        document.querySelector("#search").onkeyup = function() {
            var search = document.querySelector("#search").value
            console.log(search) 
            container.forEach(function(result) {
                    if (search === result.dataset.id) { 
                    var htmlID = ""   
                    htmlID += `<section class="player-container">
                    <div class="player-top">
                    <div class="title">${result.dataset.title}</div>
                    <div class="id">#${search}</div></div>
                    <div class="player"><div class="play-button"><div class="play"></div></div>
                    <div class="waveform" id="wave${result.dataset.id}"></div></div></section>`       
                    document.querySelector("#audio-container").innerHTML = ""
                    document.querySelector("#audio-container").innerHTML = htmlID
                    document.querySelector("#searchResult").innerHTML = `Results: ${search}`
                }
            })   }
*/
        document.querySelector("#search").onkeyup = function() {
            var search = document.querySelector("#search").value
            var filtered = audiofile.filter(audio => audio.id == search)
            
            if (search) {
                document.querySelector("#searchResult").innerHTML = `Results for: "${search}"`
                console.log(filtered[0].id) 
            } else if (search === "") {
                document.querySelector("#searchResult").innerHTML = ""
                console.log("BOBA") 
            
            } else if (search === "x"){
                document.querySelector("#searchResult").innerHTML = `Your search for: "${search}" turned 0 results.`
                console.log("ggg") 
            }
        }
                    
                
                //console.log(filtered)
                /**
                 * //var htmlID = ""
                audiofile.filter(function(val) {
                    htmlID += `<section class="player-container">
                    <div class="player-top">
                    <div class="title"></div> 
                    <div class="id">#${search}</div></div>
                    <div class="player"><div class="play-button"><div class="play"></div></div>
                    <div class="waveform" id="wave${search}"></div></div></section>`       
                    document.querySelector("#audio-container").innerHTML = ""
                    document.querySelector("#audio-container").innerHTML = htmlID
                    document.querySelector("#searchResult").innerHTML = `Results: ${search}`  
                    //${/*result.dataset.title*/
                    
            
    
        for (var i = 0; i < container.length; i++) {
            wave[i] = WaveSurfer.create({
                container: `#wave${container[i].dataset.id}`,backgroundColor: 'rgb(10, 10, 10)', waveColor: 'grey',progressColor: 'red',cursorColor: 'black',
                loopSelection: true,mediacontrols:true,responsive: .1,barWidth: 2, barRadius: 3,cursorWidth: 3,height: 100,barGap: 3, partialRender: true, normalize: true,hideScrollbar: true,forceDecode: true,})
            wave[i].load(container[i].dataset.link)
            playButton[i].addEventListener('click', function() {
                var x = this.parentNode.children[1].attributes[2].nodeValue
                wave[x].playPause()
                this.children[0].classList.toggle('paused')})}

        
    
    
        
        
        
            

 
       
       
