		var modalId = 'modal';
		var containerId = 'container';
		var vidFrameId = 'videoFrame';
	
		window.addEventListener('load', windowLoaded);
		window.addEventListener('resize', windowResized);

        function windowLoaded(e) {
			var vidLink = document.getElementById('videoLink');
			vidLink.addEventListener('click', playVideo);
		}
		
		function windowResized(e) {
			var vidFrame = document.getElementById(vidFrameId);
			if (vidFrame) {
				var vidSize = videoSizeForSize(document.documentElement.clientWidth, document.documentElement.clientHeight);
				vidFrame.width = vidSize.width;
				vidFrame.height = vidSize.height;
				vidFrame.style.marginLeft = - (vidSize.width / 2) + 'px';
				vidFrame.style.marginTop = - (vidSize.height / 2) + 'px';
			}
		}
		
		function videoSizeForSize(clientW, clientH) {
//			var maxW = 0.75 * clientW;
//			var maxH = 0.75 * clientH;
//			var vidW = 1280;
//			var vidH = 720;

            var maxW = 0.85 * clientW;
            var maxH = 0.85 * clientH;
            var vidW = 1920;
            var vidH = 1080;
			
			var adjVidW = vidW > maxW ? maxW : vidW;
			var adjVidH = (adjVidW / vidW) * vidH;
			
			adjVidH = adjVidH > maxH ? maxH : adjVidH;
			adjVidW = (adjVidH / vidH) * vidW;
			
			var size = new Object();
			size.width = adjVidW;
			size.height = adjVidH;
			
			return size;
		}
		
		function playVideo(e) {
			if(/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return;
			}
			
			e.preventDefault();
			
			var modal;
			var vidFrame;
			
			var clientW = document.documentElement.clientWidth;
			var clientH = document.documentElement.clientHeight;
			var vidSize = videoSizeForSize(clientW, clientH);

			var modalHTML = '<div id="modalbackground"></div><iframe id="' + vidFrameId + '" src="https://www.youtube.com/embed/mvlcCQ1RWXc?controls=1&autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3" width="' + vidSize.width + '" height="' + vidSize.height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
			
			modal = document.createElement('div');
			modal.id = modalId;
			modal.innerHTML = modalHTML;
			modal.addEventListener('click', closeModal);
			
			document.body.appendChild(modal);

			container = document.getElementById(containerId);
			vidFrame = document.getElementById(vidFrameId);
			vidFrame.style.marginLeft = - (vidSize.width / 2) + 'px';
			vidFrame.style.marginTop = - (vidSize.height / 2) + 'px';
			vidFrame.style.transition = 'all 0.5s ease-out';
			vidFrame.style.webkitTransform = 'translate(0px, -' + (clientH) +'px)'
			vidFrame.style.transform = vidFrame.style.webkitTransform;
			
			setTimeout(function(){
				modal.classList.add('active');
				container.classList.add('active');
				vidFrame.style.webkitTransform = 'translate(0px,0px)';
				vidFrame.style.transform = vidFrame.style.webkitTransform;
			}, 0);
		}
		
		function closeModal(e) {
			var clientH = document.documentElement.clientHeight;
			var modal = document.getElementById(modalId);
			modal.classList.remove('active');
			container.classList.remove('active');
			var vidFrame = document.getElementById(vidFrameId);
			vidFrame.style.transition = 'all 0.5s ease-out';	
			vidFrame.style.webkitTransform = 'translate(0px,-' + clientH +'px)';
			vidFrame.style.transform = vidFrame.style.webkitTransform;
			
			setTimeout(function(){
				modal.parentElement.removeChild(modal);
			}, 500);
		}