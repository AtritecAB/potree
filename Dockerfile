FROM httpd:2.4

COPY ./build /usr/local/apache2/htdocs/build

#COPY ./examples /usr/local/apache2/htdocs/examples

COPY ./libs /usr/local/apache2/htdocs/libs

#COPY ./pointclouds /usr/local/apache2/htdocs/pointclouds

COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
