<script setup>
// Every product that passed the Kubernetes v1.34 conformance suite, pulled from
// cncf/k8s-conformance. The wall is meant to be read as a mass, not a list —
// nobody needs to read the names to get the point.
//
// 131 submissions; 125 shown, because Gardener files one per cloud and they
// collapse to the same label here.
const DISTRIBUTIONS = [
  'Accordion',
  'AKS Engine for Azure Stack',
  'Alauda Container Platform ACP',
  'Alibaba Cloud ACK',
  'Amazon EKS',
  'Amazon EKS Anywhere',
  'Amazon EKS-D',
  'AME',
  'Arcfra Kubernetes Engine',
  'Aruba Managed Kubernetes',
  'ASUS Cloud Infra',
  'Azure Kubernetes Service AKS',
  'Baidu Cloud Container Engine',
  'BKS',
  'BoCloud BeyondContainer',
  'Canonical Kubernetes',
  'Catalyst Cloud Kubernetes Service',
  'Charmed Kubernetes',
  'Civo Kubernetes',
  'CKE - Cybozu Kubernetes Engine',
  'Cloud Container Distribution',
  'Clush Kube',
  'Cocktail Cloud',
  'Control Plane Managed Kubernetes',
  'Coredge Kubernetes Platform',
  'CoreWeave Kubernetes Service CKS',
  'Cozystack',
  'CubeX',
  'DaoCloud Enterprise',
  'DG-i Kubernetes Platform',
  'DigitalOcean Kubernetes',
  'ELASTX Private Kubernetes',
  'Exoscale Scalable Kubernetes Service',
  'Gardener on ALICLOUD',
  'Gardener on AWS',
  'Gardener on AZURE',
  'Gardener on GCE',
  'Gardener on OPENSTACK',
  'Gcore Managed Kubernetes',
  'GienTech Container Cloud Platform GTCP',
  'Google Kubernetes Engine',
  'Hikube',
  'HPE Ezmeral Runtime Enterprise',
  'HPE HKS',
  'HUAWEI CLOUD Cloud Container Engine',
  'IBM Cloud Kubernetes Service',
  'Infrinia AI Cloud OS',
  'IONOS Cloud Managed Kubernetes',
  'k0s',
  'k3k',
  'k3s',
  'kubeasz',
  'kubekey',
  'KubeOne',
  'KubeOps',
  'Kubermatic Kubernetes Platform',
  'Kubernetes - The Easier Way',
  'KubeSphere',
  'kubespray',
  'Kublr',
  'kURL',
  'Leaseweb Managed Kubernetes',
  'Lenovo xCloud Container Platform',
  'Linode Kubernetes Engine',
  'Managed Kubernetes',
  'Managed Kubernetes on aws',
  'Managed Service for Kubernetes',
  'MetaKube',
  'Metal Stack Cloud Kubernetes',
  'MicroK8s',
  'Mirantis Kubernetes Engine',
  'Nectar Research Cloud Magnum Service',
  'NestOS Kubernetes deployer',
  'NETWAYS Managed Kubernetes',
  'NHN Kubernetes Service NKS',
  'NKP',
  'openFuyao',
  'OpenNebula OneKS',
  'Oracle OKE',
  'OVHcloud Managed Kubernetes Service',
  'Palette',
  'Platform9 Managed Kubernetes',
  'plusserver Kubernetes Engine PSKE',
  'Previder Kubernetes Engine',
  'Proact Managed Container Platform',
  'QingCloud Kubernetes Engine QKE',
  'Rafay',
  'Rancher Kubernetes',
  'Red Hat build of MicroShift',
  'Red Hat OpenShift',
  'Red Hat OpenShift Dedicated',
  'Red Hat OpenShift on IBM Cloud',
  'RKE Government',
  'Samsung Kubernetes Engine SKE',
  'Scaleway Kubernetes Kapsule',
  'SECloudit',
  'Shturval',
  'SIGHUP Distribution',
  'STACKIT Kubernetes Engine SKE',
  'StarlingX',
  'Swisscom Kubernetes Service',
  'Switch Cloud Kubernetes SCK',
  'TaiChu',
  'Taikun',
  'Taikun CloudWorks',
  'Taikun TKS',
  'Talos Linux',
  'Tarook',
  'Tata Vayu',
  'TECS OpenPalette',
  'Tencent Kubernetes Engine',
  'Typhoon',
  'UpCloud Managed Kubernetes',
  'vCluster',
  'vCluster Private Nodes',
  'VIOLA',
  'VMware Tanzu Kubernetes Grid',
  'VMware vSphere Kubernetes Service',
  'Volcengine Kubernetes Engine',
  'Vultr Kubernetes Engine',
  'Welkin based on Cluster API',
  'Welkin based on Kubespray',
  'Whitemist',
  'Wind River Studio Cloud Platform',
  'WKS - WIIT Kubernetes Service',
]
</script>

<template>
  <div class="wall-wrap">
    <div class="wall">
      <span v-for="d in DISTRIBUTIONS" :key="d" class="distro">{{ d }}</span>
    </div>
  </div>
</template>

<style scoped>
.wall-wrap { margin-top: 1rem; }

.wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .3rem .55rem;
  line-height: 1.35;
}

.distro {
  font-size: .56rem;
  letter-spacing: .02em;
  opacity: .75;
  white-space: nowrap;
}
</style>
