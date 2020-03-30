docker build -t stack_overflow-image .

docker tag stack_overflow-image registry.heroku.com/stack_overflow/web


docker push registry.heroku.com/stack_overflow/web

heroku container:release web -a stack_overflow