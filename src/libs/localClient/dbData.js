const platform = {
  key: 'id',
  data: [
    {
      id: 1,
      name: 'Desktop'
    },
    {
      id: 2,
      name: 'Workstation'
    },
    {
      id: 3,
      name: 'Server'
    }
  ]
};

const typeOfMemory = {
  key: 'id',
  data: [
    {
      id: 1,
      name: 'DDR4'
    }
  ]
};

const formFactor = {
  key: 'id',
  data: [
    {
      id: 1,
      name: 'ATX'
    },
    {
      id: 2,
      name: 'M-ATX'
    }
  ]
};

const socket = {
  key: 'id',
  data: [
    {
      id: 1,
      name: '1x1151v2'
    },
    {
      id: 2,
      name: '1x1151'
    }
  ]
};

const motherboard = {
  key: 'id',
  data: [
    {
      id: 1,
      platform: 1,
      name: 'ASUS PRIME H310M-R R2.0 OEM',
      price: 3500,
      socket: 1,
      formFactor: 2,
      numberOfSlots: 2,
      typeOfMemory: 1,
      maximumMemory: 32,
      memoryFrequency: [2666, 2400]
    },
    {
      id: 2,
      platform: 1,
      name: 'Gigabyte H370M DS3H',
      price: 6200,
      socket: 1,
      formFactor: 2,
      numberOfSlots: 4,
      typeOfMemory: 1,
      maximumMemory: 64,
      memoryFrequency: [2666, 2400]
    },
    {
      id: 3,
      platform: 2,
      name: 'Supermicro X11SAE-F',
      price: 17500,
      socket: 2,
      formFactor: 2,
      numberOfSlots: 4,
      typeOfMemory: 1,
      maximumMemory: 64,
      memoryFrequency: [2400, 2133]
    }
  ]
};

const ram = {
  key: 'id',
  data: [
    {
      id: 1,
      platform: 1,
      name: 'Kingston HyperX Fury',
      price: 2500,
      typeOfMemory: 1,
      memoryFrequency: 2666,
      memory: 4
    },
    {
      id: 2,
      platform: 1,
      name: 'Kingston HyperX Fury',
      price: 4500,
      typeOfMemory: 1,
      memoryFrequency: 2666,
      memory: 8
    },
    {
      id: 3,
      platform: 2,
      name: 'Kingston ECC',
      price: 2500,
      typeOfMemory: 1,
      memoryFrequency: 2400,
      memory: 4
    },
    {
      id: 4,
      platform: 2,
      name: 'Kingston ECC',
      price: 3500,
      typeOfMemory: 1,
      memoryFrequency: 2666,
      memory: 8
    },
    {
      id: 5,
      platform: 3,
      name: 'Kingston ECC REGKSM26RS4/16MEI',
      price: 7500,
      typeOfMemory: 1,
      memoryFrequency: 2666,
      memory: 16
    },
  ]
};

export default { platform, typeOfMemory, formFactor, socket, motherboard, ram };
