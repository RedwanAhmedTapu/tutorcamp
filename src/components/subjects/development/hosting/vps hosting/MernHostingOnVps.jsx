
const MernHostingOnVps = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">How to Host a MERN App on a VPS with Nginx</h1>

      {/* Prerequisites */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <ul className="list-disc list-inside ml-4">
          <li>A VPS (IONOS, DigitalOcean, etc.) running Ubuntu or another Linux distribution.</li>
          <li>Root or sudo access to your VPS.</li>
          <li>A domain or subdomain (e.g., <strong>olive-server.oliveandlime.co.uk</strong>).</li>
          <li>An Express.js app hosted on GitHub.</li>
        </ul>
      </section>

      {/* Step 1: Connect to Your VPS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Connect to Your VPS</h2>
        <p className="mb-2">
          SSH into your VPS using the following command:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>ssh root@&lt;your-server-ip&gt;</code>
        </pre>
        <p className="mt-2">
          Example:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>ssh root@213.165.90.129</code>
        </pre>
      </section>

      {/* Step 2: Update and Install Dependencies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Update and Install Dependencies</h2>
        <p className="mb-2">Ensure your system is up to date, and install the necessary packages:</p>
        <div className="mb-4">
          <strong>Update system:</strong>
          <pre className="bg-gray-200 p-4 rounded">
            <code>sudo apt update && sudo apt upgrade -y</code>
          </pre>
        </div>

        <div className="mb-4">
          <strong>Install Git:</strong>
          <pre className="bg-gray-200 p-4 rounded">
            <code>sudo apt install git -y</code>
          </pre>
        </div>

        <div className="mb-4">
          <strong>Install Node.js (v18 LTS) and npm:</strong>
          <pre className="bg-gray-200 p-4 rounded">
            <code>{`curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs`}</code>
          </pre>
        </div>

        <div className="mb-4">
          <strong>Install Nginx:</strong>
          <pre className="bg-gray-200 p-4 rounded">
            <code>sudo apt install nginx -y</code>
          </pre>
        </div>
      </section>

      {/* Step 3: Clone Your Express App from GitHub */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Clone Your Express App from GitHub</h2>
        <p className="mb-2">
          Clone your app from GitHub by navigating to the directory where you want to store your app:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>git clone https://github.com/your-username/your-repo.git</code>
        </pre>
        <p className="mt-2">
          Example:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>git clone https://github.com/your-username/Restraunt-Api.git</code>
        </pre>
        <p className="mt-4">Change into the cloned directory:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>cd Restraunt-Api</code>
        </pre>
      </section>

      {/* Step 4: Install Project Dependencies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Install Project Dependencies</h2>
        <p className="mb-2">Run the following command to install all the dependencies for your Express.js project:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>npm install</code>
        </pre>
      </section>

      {/* Step 5: Start the Express App */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 5: Start the Express App</h2>
        <p className="mb-2">You can start your Express app using:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>node app.js</code>
        </pre>
        <p className="mt-4">Alternatively, use npm:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>npm start</code>
        </pre>
        <p className="mt-4">
          For production, it’s a good idea to use <strong>pm2</strong> to manage the process:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>{`sudo npm install pm2 -g
pm2 start app.js`}</code>
        </pre>
      </section>

      {/* Step 6: Configure Nginx as a Reverse Proxy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 6: Configure Nginx as a Reverse Proxy</h2>
        <p className="mb-2">
          To proxy requests from Nginx to your Express app, create an Nginx configuration file:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>sudo nano /etc/nginx/sites-available/olive-server</code>
        </pre>
        <p className="mt-4">Add the following configuration:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>{`server {
    listen 80;
    server_name olive-server.oliveandlime.co.uk;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`}</code>
        </pre>
        <p className="mt-4">Activate the configuration:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>sudo ln -s /etc/nginx/sites-available/olive-server /etc/nginx/sites-enabled/</code>
        </pre>
        <p className="mt-4">Check for syntax errors and reload Nginx:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>{`sudo nginx -t
sudo systemctl reload nginx`}</code>
        </pre>
      </section>

      {/* Step 7: Ensure Your App is Running */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 7: Ensure Your App is Running</h2>
        <p className="mb-2">Check if your Express app is running using `pm2`:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>pm2 status</code>
        </pre>
      </section>

      {/* Step 8: Configure DNS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 8: Configure DNS</h2>
        <p className="mb-2">
          In your DNS provider’s settings, create an A record to point your subdomain to your VPS’s IP address.
        </p>
      </section>

      {/* Step 9: Verify Your Setup */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step 9: Verify Your Setup</h2>
        <p className="mb-2">Visit your domain or subdomain in a browser to see your app running.</p>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Check Nginx and app logs for errors.</li>
          <li>Ensure the firewall allows HTTP and HTTPS traffic.</li>
          <li>Verify the correct DNS settings are configured.</li>
        </ul>
      </section>
    </div>
  );
};

export default MernHostingOnVps;
