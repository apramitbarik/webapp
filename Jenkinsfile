node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */
	 app = docker.build("apramit/webapp", "-f DockerFile .")
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://hub.docker.com/r/apramit/webapp', 'docker-hub') {
            /* app.push("${env.BUILD_NUMBER}") */
            app.push("latest")
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
}
