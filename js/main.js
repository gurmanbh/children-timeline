(function(){

	var tikTok = new TikTok({
	  el: '#options-tik-tok',
	  dateFormat: '[Year:] YYYY, [Month:] MMM, [Day:] DD',
	  dateDisplay: 'MMMM DD, YYYY',
	  descending: false,
	  media:'media',
	  template:'<div class="tik-tok-container tt-bg-color"> <div class="tt-progress-bar"><div class="tt-progress"></div></div><% if ( title ) { %><div class="tt-header tt-header-color cf"><div class="tt-label">Timeline:</div><div class="tt-title"><%= title %></div></div><% } %><div class="tt-spine-background"><div class="tt-spine tt-spine-color"></div></div><div class="tt-spine-end tt-spine-top tt-header-color"><div><div class="tt-spine-point tt-spine-color"></div></div><div><div class="tt-spine tt-spine-color"></div></div></div><div class="tt-groups"><% _.forEach(groups, function(g, gi) { %><div class="tt-group"><div class="tt-group-label-wrapper"><div class="tt-group-label tt-spine-color"> <%= g.display %> </div> </div><div class="tt-entries"><% _.forEach(g.entries, function(e, ei) { %><div class="tt-entry" id="<%= tiktok.id %>-<%= e.id %>"> <div class="tt-entry-date"><%= e.dateFormatted %></div><% if (e.title) { %><h3 class="tt-entry-title"><%= e.title %></h3><% } %><div class="tt-entry-content-wrapper cf"><% if (e.body) { %><div class="tt-entry-body-wrapper <% if (e.media) { %>with-media<% } %>"><div class="tt-entry-body"><%= e.body %></div></div><% } %><% if (e.media) { %><div class="tt-entry-media-wrapper <% if (e.body) { %>with-body<% } %>"><div class="tt-entry-media <% if (e.source) { %>with-source<% } %>"><% if (e.type === "youtube") { %><iframe class="tt-entry-media-youtube" width="100%" height="350" src="<%= e.media %>" frameborder="0" allowfullscreen></iframe><% } else if (e.type === "soundcloud_large") { %><iframe class="tt-entry-media-soundcloud" width="100%" height="350" scrolling="no" frameborder="no" src="<%= e.media %>"></iframe><% } else if (e.type === "soundcloud") { %><iframe class="tt-entry-media-soundcloud" width="100%" height="166" scrolling="no" frameborder="no" src="<%= e.media %>"></iframe><% } else if (e.type === "embed") { %><iframe class="tt-entry-media-embed" width="100%" height="350" scrolling="no" frameborder="no" src="<%= e.media %>"></iframe><% } else { %><img class="tt-entry-media-image" src="<%= e.media %>"><% } %></div><% if (e.source) { %><div class="tt-entry-source"><%= e.source %></div><% } %></div><% } %></div></div><% }) %></div></div><% }) %></div><div class="tt-spine-end tt-spine-bottom tt-bg-color"><div><div class="tt-spine-point tt-spine-color"></div></div></div></div>',
	  groupBy: 'years',
	  groupByDisplay: 'YYYY',
	  keyMapping: {
	    title: 'customTitle'
	  },
	  entries: [
	    {
	      date: 'Year: 1955, Month: Sep, Date: 15',
	      customTitle: 'Emmett Till’s Funeral',
	      body: 'While visiting family in Money, Mississippi, 14-year-old Till, an African American from Chicago, was brutally murdered for allegedly flirting with a white woman four days earlier. His assailants, the white woman’s husband and her brother made Emmett carry a 75-pound cotton-gin fan to the bank of the Tallahatchie River. Emmett Till’s murder trial brought to light to the brutality of Jim Crow segregation in the South.',
	      media: "http://jetcityorange.com/emmett-till/Emmett-Till-2.jpg",
	      source:'Jet Magazine'
	    },
	    {
	      date: 'Year: 2011, Month: Dec, Day: 6',
	      customTitle: 'Afghanistan bombing',
	      body: 'More than 80 people were killed in an explosion Dec. 6, 2011, at a shrine in Kabul, Afghanistan, where Shia Muslims were participating in a religious ceremony. The image included a girl screaming in the aftermath. ',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Afghan-Bombing-4165.jpg',
	      source:' Massoud Hossaini / AFP / Getty Images'
	    },
	    {
	      date: 'Year: 2012, Month: Nov, Day: 20',
	      customTitle: 'Gaza City, Palestinian Territories',
	      body: 'This photograph from Nov. 20, 2012, shows 2-year-old Suhaib Hijazi and his older brother Muhammad -- who were killed when their house was destroyed by an Israeli missile strike. -- carried by their uncles to a  mosque for their burial ceremony. The photograph was award a prestigious World Press Photo Award.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/WPP-Winner-20134156.jpg'
	    },
	    {
	      date: 'Year: 2008, Month: Sep, Day: 7',
	      customTitle: 'Haiti Hurricane',
	      body: 'Miami Herald photojournalist Patrick Farrell documented the struggles of life in the poorest nation in the Americans. He witnessed its people buckle under the cruelty of a merciless hurricane season in 2008. Four consecutive storms slammed the island nation, leaving in their wake staggering death tolls and massive destruction to an already-frail way of life. The lifeless body of 5-year-old Tamasha Jean, the daughter of Frantz Samedi, is loaded onto a pickup truck in Cabaret, Haiti, on Sept. 7, 2008, along with bodies of other children that died in the floods caused by Hurricane Ike.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Patrick-F.-20104158.jpg',
	      source:'Miami Herald / Patrick Farrell'
	    },
	    {
	      date: 'Year: 1972, Month: Jun, Day: 8',
	      customTitle: 'Napalm Girl',
	      body: 'Vietnam, "The Terror of War," depicts children fleeing from a napalm bombing.  The 1973 photograph focuses on 9-year-old Phan Thi Kim Ph’uc  running naked toward the camera from a South Vietnamese napalm attack on North Vietnamese invaders at the Trang Bang village.  The photograph is thought to be one of the most memorable photographs of the 20th century and has been credited for ending the war movement.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Terror-of-War_-Ut.jpg',
	      source:'Associated Press / Nick Ut'
	    },
	    {
	      date: 'Year: 2014, Month: Nov, Day: 21',
	      customTitle: 'Ebola outbreak in Africa',
	      body: 'This is an image from Nov. 21, 2014, of Isatu Sesay, 16, suffering from symptoms of Ebola. She rolls around delirious and in pain, as she lays on a foam mattress three hours before her death in Freetown, Sierra Leone. Daniel Berehulak, on assignment for the for The New York Times, was one of the first three photographers in the world to offer illumination on this outbreak.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Children-in-Crisis.jpg',
	      source:'The New York Times / Daniel Berehulak'
	    },
	    {
	      date: 'Year: 1993, Month: Mar, Day: 26',
	      customTitle: 'Sudan Relief Center',
	      body: 'Kevin Carter’s startling 1993 photograph of Sudanese child being stalked by a vulture outside an aid center earned the South African photojournalist the Pulitzer prize in the news category. He was on assignment for The New York Times. That same year, Carter committed suicide before he could appreciate the world hunger relief effort sparked by his work.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Sudan-Relief-Center.png',
	      source:'The New York Times / Kevin Carter'
	    },
	    {
	    	date:'Year: 1995, Month: Apr, Day: 19',
	    	customTitle:'Oklahoma City Bombing',
	    	body:'The compelling photograph of firefighter Chris Fields cradling the tiny, bloody body of Baylee Almon captured the essence of one of America’s most dramatic tragedies: the Oklahoma City bombing on April 19, 1995. The photograph struck a chord throughout the nation leading to changes in access to and the photographing of federal property.',
	    	media:'http://www.poynter.org/wp-content/uploads/2015/09/Little-Baylee-Almon.png',
	    	source:'Independent Photographer Charles Porter'
	    },
	    {
	    	date:'Year: 2015, Month: Sep, Day: 2',
	    	customTitle: 'Aylan Kurdi',
	    	media:'http://www.poynter.org/wp-content/uploads/2015/09/src.adapt_.960.high_.refugee_baby_090215.1441270800661.jpg',
	    	body:"Capturing the lifeless body of a 3-year-old Syrian boy Aylan Kurdi, the photograph was clicked after his family's attempt to migrate from Turkey to Greece. <br><a href='http://www.poynter.org/news/mediawire/371092/front-page-of-the-day-somebodys-child-warning-disturbing-image/' target='_blank'>According</a> to Poynter's Kelly McBride, the image holds political significance. “Sometimes it’s gratuitous for the media to show images of death,” said McBride. “But sometimes it’s absolutely the most responsible thing journalists could do. Europe is in the midst of a dramatic, historical moment that will forever alter its future. The migration of refugees from the Middle East will change the continent’s identity. The image of this drowned Syrian boy is about so much more.” ",
	    	source:'Associated Press / Nilüfer Demir'
	    }
	  ]
	});

	$()

	$('img.tt-entry-media-image').on('click',function(){
		if ($(this).hasClass('clear')){
			$(this).removeClass('clear')
		} else{
			$(this).addClass('clear')
		}
	})
}).call(this);