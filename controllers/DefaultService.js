'use strict';

exports.addCluster = function(args, res, next) {
  /**
   * adds a cluster
   *
   * cluster ClusterCreation Cluster to add to the store
   * returns cluster
   **/
  var examples = {};
  examples['application/json'] = {
  "policy_enabled" : true,
  "ssh_port" : "aeiou",
  "service_cidr_block" : "aeiou",
  "docker_registry_cs" : "aeiou",
  "networking" : "aeiou",
  "admin_password" : "aeiou",
  "docker_registry_setup_internal" : true,
  "docker_registry_address" : "aeiou",
  "provisioned" : true,
  "name" : "aeiou",
  "ssh_key" : "aeiou",
  "allow_package_installation" : true,
  "update_hosts_files" : true,
  "certificates_expiry" : "aeiou",
  "docker_registry_port" : "aeiou",
  "pod_cidr_block" : "aeiou",
  "ssh_user" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.addVolumeByClusterName = function(args, res, next) {
  /**
   * adds a new volume the given cluster
   *
   * name String name of the cluster to fetch
   * volume Volume  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.addWorkerByClusterName = function(args, res, next) {
  /**
   * adds a worker to the given cluster
   *
   * name String name of the cluster to fetch
   * host HostModel 
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteCluster = function(args, res, next) {
  /**
   * deletes a single cluster based on the name supplied
   *
   * name String name of cluster to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.findClusterByName = function(args, res, next) {
  /**
   * Returns a cluster, given by name
   *
   * name String name of cluster to fetch
   * returns cluster
   **/
  var examples = {};
  examples['application/json'] = {
  "policy_enabled" : true,
  "ssh_port" : "aeiou",
  "service_cidr_block" : "aeiou",
  "docker_registry_cs" : "aeiou",
  "networking" : "aeiou",
  "admin_password" : "aeiou",
  "docker_registry_setup_internal" : true,
  "docker_registry_address" : "aeiou",
  "provisioned" : true,
  "name" : "aeiou",
  "ssh_key" : "aeiou",
  "allow_package_installation" : true,
  "update_hosts_files" : true,
  "certificates_expiry" : "aeiou",
  "docker_registry_port" : "aeiou",
  "pod_cidr_block" : "aeiou",
  "ssh_user" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findClusters = function(args, res, next) {
  /**
   * returns all existing clusters
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "policy_enabled" : true,
  "ssh_port" : "aeiou",
  "service_cidr_block" : "aeiou",
  "docker_registry_cs" : "aeiou",
  "networking" : "aeiou",
  "admin_password" : "aeiou",
  "docker_registry_setup_internal" : true,
  "docker_registry_address" : "aeiou",
  "provisioned" : true,
  "name" : "aeiou",
  "ssh_key" : "aeiou",
  "allow_package_installation" : true,
  "update_hosts_files" : true,
  "certificates_expiry" : "aeiou",
  "docker_registry_port" : "aeiou",
  "pod_cidr_block" : "aeiou",
  "ssh_user" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findEtcdsByClusterName = function(args, res, next) {
  /**
   * the etcd nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findIngressesByClusterName = function(args, res, next) {
  /**
   * the ingress nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findMastersByClusterName = function(args, res, next) {
  /**
   * the masters nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findStorageByClusterName = function(args, res, next) {
  /**
   * the storage nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findVolumesByClusterName = function(args, res, next) {
  /**
   * returns the volumes of this cluster
   *
   * name String name of the cluster to fetch
   * returns errorModel
   **/
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findWorkersByClusterName = function(args, res, next) {
  /**
   * the workers nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setEtcdsByClusterName = function(args, res, next) {
  /**
   * set the etcd nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * hosts List  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setIngressesByClusterName = function(args, res, next) {
  /**
   * set the workers nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * hosts List  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setMastersByClusterName = function(args, res, next) {
  /**
   * set the masters nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * hosts List  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setStorageByClusterName = function(args, res, next) {
  /**
   * set the storage nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * hosts List  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.setWorkersByClusterName = function(args, res, next) {
  /**
   * set the workers nodes of the given cluster
   *
   * name String name of the cluster to fetch
   * hosts List  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/jsonl'] = [ {
  "ip" : "aeiou",
  "host" : "aeiou",
  "internalIp" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

