'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addCluster = function addCluster (req, res, next) {
  Default.addCluster(req.swagger.params, res, next);
};

module.exports.addVolumeByClusterName = function addVolumeByClusterName (req, res, next) {
  Default.addVolumeByClusterName(req.swagger.params, res, next);
};

module.exports.addWorkerByClusterName = function addWorkerByClusterName (req, res, next) {
  Default.addWorkerByClusterName(req.swagger.params, res, next);
};

module.exports.deleteCluster = function deleteCluster (req, res, next) {
  Default.deleteCluster(req.swagger.params, res, next);
};

module.exports.findClusterByName = function findClusterByName (req, res, next) {
  Default.findClusterByName(req.swagger.params, res, next);
};

module.exports.findClusters = function findClusters (req, res, next) {
  Default.findClusters(req.swagger.params, res, next);
};

module.exports.findEtcdsByClusterName = function findEtcdsByClusterName (req, res, next) {
  Default.findEtcdsByClusterName(req.swagger.params, res, next);
};

module.exports.findIngressesByClusterName = function findIngressesByClusterName (req, res, next) {
  Default.findIngressesByClusterName(req.swagger.params, res, next);
};

module.exports.findMastersByClusterName = function findMastersByClusterName (req, res, next) {
  Default.findMastersByClusterName(req.swagger.params, res, next);
};

module.exports.findStorageByClusterName = function findStorageByClusterName (req, res, next) {
  Default.findStorageByClusterName(req.swagger.params, res, next);
};

module.exports.findVolumesByClusterName = function findVolumesByClusterName (req, res, next) {
  Default.findVolumesByClusterName(req.swagger.params, res, next);
};

module.exports.findWorkersByClusterName = function findWorkersByClusterName (req, res, next) {
  Default.findWorkersByClusterName(req.swagger.params, res, next);
};

module.exports.setEtcdsByClusterName = function setEtcdsByClusterName (req, res, next) {
  Default.setEtcdsByClusterName(req.swagger.params, res, next);
};

module.exports.setIngressesByClusterName = function setIngressesByClusterName (req, res, next) {
  Default.setIngressesByClusterName(req.swagger.params, res, next);
};

module.exports.setMastersByClusterName = function setMastersByClusterName (req, res, next) {
  Default.setMastersByClusterName(req.swagger.params, res, next);
};

module.exports.setStorageByClusterName = function setStorageByClusterName (req, res, next) {
  Default.setStorageByClusterName(req.swagger.params, res, next);
};

module.exports.setWorkersByClusterName = function setWorkersByClusterName (req, res, next) {
  Default.setWorkersByClusterName(req.swagger.params, res, next);
};
