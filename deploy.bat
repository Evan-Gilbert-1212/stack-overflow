docker build -t stack-overflow-image .

docker tag stack-overflow-image registry.heroku.com/sdg-stack-overflow/web


docker push registry.heroku.com/sdg-stack-overflow/web

heroku container:release web -a sdg-stack-overflow