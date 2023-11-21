# Cloudpods Documentation

[English](./README.md) | [简体中文](./README_CN.md)

This repository contains [Cloudpods](https://github.com/yunionio/cloudpods) related documentation.

## Installing Dependencies

- hugo v0.120.0:
    - Linux: https://github.com/gohugoio/hugo/releases/download/v0.120.0/hugo_extended_0.120.0_Linux-64bit.tar.gz
    - MacOS: https://github.com/gohugoio/hugo/releases/download/v0.120.0/hugo_extended_0.120.0_darwin-universal.tar.gz
- docker: To install docker, please refer to the documentation at [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

## View Document Website

```bash
$ git clone https://github.com/yunionio/docs --recursive
$ cd docs

# Running the hugo serve container with docker
$ make container-serve
# Then visit http://localhost:1313 to view the documentation site
```

## Edit Document

The documents are in the content/{en,zh} directory, select the desired section to edit or add, for content organization please refer to: https://gohugo.io/content-management/organization/.

## Compile Documentation

There are no multiple versions of the documentation in the development phase. To see the effect of multiple versions of the documentation, you can run the following command.

```bash
# Compiling multiple versions of documentation using docker.
# Then the documentation site will be in the . /public directory.
$ make container-build
$ cd public && python3 -m http.server 1313
```

## Update Submodule

```bash
$ git submodule update --recursive
$ git pull --recurse-submodules
```

## View lastest verion of documentation

```
# compile the documentation of latest version
make test
# open browse to visit http://localhost:1313
```
