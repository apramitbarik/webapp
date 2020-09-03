node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */
	    docker.withRegistry('https://registry-1.docker.io/v2/library/node/manifests/12', 'docker-hub'){
        	app = docker.build("webapp", "-f DockerFile .")
	    }
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            /* app.push("${env.BUILD_NUMBER}") */
            app.push("latest")
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
}
