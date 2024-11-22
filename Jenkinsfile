pipeline {
  agent any
  tools {nodejs "Node 22.11.0"}
  stages {
    stage('Check for vulnerabilities') {
      steps {
        sh 'npm audit --parseable --production'
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
  }
}