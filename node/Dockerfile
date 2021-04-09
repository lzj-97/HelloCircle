FROM node:latest
WORKDIR /home/node
# ENV version node:v1
# VOLUME /home/lzj/store
# EXPOSE 3000:3000
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
    && cnpm install pm2 -g 
COPY nodeproject /home/node/
ENTRYPOINT ["pm2-runtime","start"]
CMD ["/home/node/myexp/bin/www"]
