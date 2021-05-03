<h1>REQUIREMENTS</h1>

<ul>
  <li>NodeJS</li>
  <li>PM2</li>
  <li>PM2-windows-startup</li>
</ul>

<h1>INSTALLATION GUIDE</h1>

<p>
  This section will go over the installation process. If you already have the
  requirements above, you can skip this section. Please note that this
  installation guide is meant for windows users, if you are on any other
  platform you're going to have to figure it out on your own, sorry.

If you do not have a folder where you download projects or create coding projects, it is recommended to create one.

If you would like to modify what the status says to something unrelated to Monsterhunt, please create your own application on the discord developer website and change the clientID.

</p>

<h2>Installing NodeJS</h2>

Visit <a href="https://nodejs.org/en/" target="blank">the NodeJS website</a>

<p>
  Download the LTS version of NodeJS, or the latest one depending on your
  preference. You should run the installer and wait for it to complete.
</p>

<h2>Installing PM2</h2>

<p>
  PM2 is a process manager that you will use to keep the RPC alive while your
  computer is on. Open command prompt and create a folder where you want to keep
  the code.
  <br>
  <code>mkdir monsterhunt-rpc && cd monsterhunt-rpc</code>
  <br>
  Now to install PM2

  <br>

<code>npm install pm2 -g</code>
<br>
The -g option installs the package globally, so you can use it anywhere. You
won't want to do this for all packages, but you should for PM2 You will now
want to install a package that will start all of your saved processes when
your computer starts. This means that you will not have to restart the
Monsterhunt presence process each time you restart your computer.
<br />
<code>npm install pm2-windows-startup -g</code>
<br>
Now you need to install pm2 startup
<code>pm2-startup install</code>

</p>

<h2>Cloning the repository<h2>

<p>
Run the following command 
<br>

<code>git clone https://github.com/MonsterhuntXYZ/monsterhunt-rpc .</code>
<br>
This will download the repository. Now run the following commands

<ul>
  <li><code>pm2 start index.js --name monsterhunt-rpc<code></li>
  <li><code>pm2 save<code></li>
</ul>

If you find that your status has stopped or not working, run:
<br>
<code>pm2 restart 0</code>
<br>
It will attempt to reconnect every 10 minutes.

</p>
