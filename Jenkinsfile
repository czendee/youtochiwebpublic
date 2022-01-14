pipeline{
  agent {
    node { label 'slave01-services' }
  }
  stages { 
    stage('Build - Sandbox'){
      when{
        expression {
          return env.GIT_BRANCH == "origin/sandbox"
        }
      }
      environment {
        ENV='dev'
      }
      steps{
        sh 'docker-compose build --force-rm'
      }
    }    

    stage('Deploy - Sandbox'){
      when{
        expression {
          return env.GIT_BRANCH == "origin/sandbox"
        }
      }

      steps{
        sh "docker-compose up --force-recreate -d"
      }
    }    
  }
}