pipeline {
  agent any
  tools {nodejs "Node 22.11.0"}
  stages {
    stage('Check for vulnerabilities') {
      steps {
        sh 'npm audit --parseable --omit=dev'
        sh 'npm outdated || exit 0'
      }
    }

    stage('Download dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Check linting') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Check unit tests') {
      steps {
        sh 'npm run test:unit'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Dockerize') {
      steps {
        sh 'docker build -t matkovic123/barespace-vue-app:latest .'
      }
    }
     stage('Docker Push') {
      agent any
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh 'docker push matkovic123/barespace-vue-app:latest'
        }
      }
    }
  }
}