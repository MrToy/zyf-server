FROM alpine
WORKDIR /home
ADD . .
EXPOSE 8080
CMD ./app
