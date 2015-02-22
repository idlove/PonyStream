# PonyStream
<img src="http://vignette4.wikia.nocookie.net/mlpfanart/images/f/ff/Applejack_3_by_xpesifeindx-d5gsde5.png" height="150"
  width="150" /> <br/><br/>
Basic streaming server for http://ponychan.ru<br/>
Written with <3 and javascript

#Usage
Just run app.js with nodejs, and app will start at port 3000
<br/>
Edit config.json, andding there your video url in following format : <br/>
<code>
{
  "video" : "http:/url_to_your_video"
}
</code><br/><br/>
Then, start the stream with <code>http://yourhost:port/start</code>
<br/>
You can also stop the stream, with <code>http://yourhost:port/stop</code>
<br/>
Visitors can watch stream at <code>http://yourhost:port/video</code>

#Enjoy!
