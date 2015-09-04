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
	      customTitle: 'Emmett Till',
	      body: 'This example goes through changing most all the options that are possible with Tik Tok.  The first thing you might notice is that we left out the <code>title</code> option all together and that section is no longer there.  Check out the <a href="https://github.com/datanews/tik-tok" target="_blank">Github</a> page for more details on customization and the API.',
	      media: "http://jetcityorange.com/emmett-till/Emmett-Till-2.jpg"
	    },
	    {
	      date: 'Year: 2011, Month: Dec, Day: 6',
	      customTitle: 'Afghan Shia Muslim',
	      body: 'The <code>dateFormat</code> option changes how Tik Tok will parse your date formats.  This can be anything supported by <a href="http://momentjs.com/docs/#/parsing/string-format/" target="_blank">Moment JS parsing strings</a>.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Afghan-Bombing-4165.jpg'
	    },
	    {
	      date: 'Year: 2012, Month: Nov, Day: 20',
	      customTitle: 'Gaza City, Palestinian Territories',
	      body: 'The <code>dateDisplay</code> option does the opposite and changes how the date will be displayed in the entries.  You can see how the date for this and all entries is different and longer.  This can be anything supported by <a href="http://momentjs.com/docs/#/displaying/format/" target="_blank">Moment JS formatting strings</a>.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/WPP-Winner-20134156.jpg'
	    },
	    {
	      date: 'Year: 2008, Month: Sep, Day: 7',
	      customTitle: 'Haiti',
	      body: 'The <code>groupByDisplay</code> option allows you to change how the date will be displayed in the grouping label.  You can see how the group is formatted as the last two digits of the year.  This can be anything supported by <a href="http://momentjs.com/docs/#/displaying/format/" target="_blank">Moment JS formatting strings</a> as well.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Patrick-F.-20104158.jpg'
	    },
	    {
	      date: 'Year: 1972, Month: Jun, Day: 8',
	      customTitle: 'Napalm Girl',
	      body: 'The <code>descending</code> option changes the order of the timeline from ascending to descending if set to <code>true</code>.  This timeline has not actually had this set, but it is explicitly set to the default.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Terror-of-War_-Ut.jpg'
	    },
	    {
	      date: 'Year: 2014, Month: Nov, Day: 21',
	      customTitle: 'FREETOWN, SIERRA LEONE, ebola',
	      body: 'The <code>groupBy</code> option overrides how Tik Tok groups entries together.  Normally this timeline would be grouped by decades but we have set it explicitly to <code>years</code>.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Children-in-Crisis.jpg'
	    },
	    {
	      date: 'Year: 1993, Month: Mar, Day: 26',
	      customTitle: 'Sudan-Relief-Center',
	      body: 'The <code>keyMapping</code> is a way to easily use a datasource that has different fields, or keys.  In this example we use the <code>customTitle</code> field as our <code>title</code>.',
	      media:'http://www.poynter.org/wp-content/uploads/2015/09/Sudan-Relief-Center.png'
	    },
	    {
	    	date:'Year: 1995, Month: Apr, Day: 19',
	    	customTitle:'Little Baylee Almon',
	    	body:'ay to easily use a datasource that has different fields, or keys.  In this example w',
	    	media:'http://www.poynter.org/wp-content/uploads/2015/09/Little-Baylee-Almon.png'
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