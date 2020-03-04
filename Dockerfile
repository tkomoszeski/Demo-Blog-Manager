FROM microsoft/dotnet:2.1-sdk

#Install node
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

COPY . /app

WORKDIR /app/Blog.Web/ClientApp
RUN npm rebuild node-sass 

WORKDIR /app/Blog.Web
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

EXPOSE 80/tcp

WORKDIR /app

RUN chmod +x entrypoint.sh
CMD /bin/bash entrypoint.sh

