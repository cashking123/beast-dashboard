const DAILY_DATA = {
  "daily": {
    "date": "2026-07-07",
    "revenue": {
      "yesterday": 9434.22,
      "day_before": 4987.3,
      "delta": 0.8916,
      "avg7": 7382.61,
      "avg30": 6803.57
    },
    "register": {
      "yesterday": 289,
      "day_before": 326,
      "delta": -0.1135,
      "avg7": 291,
      "avg30": 288
    },
    "new_payers": {
      "yesterday": 46,
      "day_before": 41,
      "delta": 0.122,
      "avg7": 48,
      "avg30": 47
    },
    "new_pay_rate": {
      "yesterday": 0.1592,
      "day_before": 0.1258,
      "delta": 0.0334,
      "avg7": 0.1889,
      "avg30": 0.198
    },
    "summary": "营收异常(+89.2%)；注册正常(-11.3%)；新增付费正常(+12.2%)",
    "channel_rev": [
      {
        "name": "聚冠_JUR",
        "val": 2753.4
      },
      {
        "name": "梵克雅宝",
        "val": 1427.47
      },
      {
        "name": "李航",
        "val": 780.45
      },
      {
        "name": "厄洛斯",
        "val": 679.52
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 667.99
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 37
      },
      {
        "name": "聚冠_JUR",
        "val": 34
      },
      {
        "name": "郑州未界发财_JUR",
        "val": 32
      },
      {
        "name": "弑神阁",
        "val": 26
      },
      {
        "name": "艾欧尼亚",
        "val": 23
      }
    ],
    "anomaly_channels": [
      {
        "name": "laoxia_JUR",
        "yest": 131.8,
        "before": 230.72,
        "delta": -0.4287,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 74.97,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "EzBKiLLa: $75→$0(-$75)",
          "churn_names": "无"
        }
      },
      {
        "name": "巴黎世家2",
        "yest": 296.7,
        "before": 481.55,
        "delta": -0.3839,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 163.96,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "cmdr.27004536: $440→$276(-$164)",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "克罗心SX",
        "yest": 5,
        "before": 13,
        "delta": -0.6154,
        "reason": "量跌"
      },
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 10,
        "before": 25,
        "delta": -0.6,
        "reason": "量跌"
      },
      {
        "name": "精聊發發發团队",
        "yest": 5,
        "before": 10,
        "delta": -0.5,
        "reason": "量跌"
      },
      {
        "name": "广亮_JUR",
        "yest": 5,
        "before": 9,
        "delta": -0.4444,
        "reason": "量跌"
      },
      {
        "name": "潘多拉",
        "yest": 12,
        "before": 18,
        "delta": -0.3333,
        "reason": "量跌"
      },
      {
        "name": "梵克雅宝",
        "yest": 37,
        "before": 55,
        "delta": -0.3273,
        "reason": "量跌"
      },
      {
        "name": "聚冠_JUR",
        "yest": 34,
        "before": 45,
        "delta": -0.2444,
        "reason": "量跌"
      },
      {
        "name": "厄洛斯",
        "yest": 11,
        "before": 13,
        "delta": -0.1538,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "cmdr.27003851",
        "ucid": "16020027003851",
        "channel": "梵克雅宝",
        "server": "S27",
        "total_pay": 2307.93,
        "last_login_days": 4
      },
      {
        "name": "Zoran",
        "ucid": "16020025011034",
        "channel": "梵克雅宝",
        "server": "S25",
        "total_pay": 1562.31,
        "last_login_days": 3
      },
      {
        "name": "Willyg",
        "ucid": "16020024003418",
        "channel": "弑神阁",
        "server": "S24",
        "total_pay": 1584.81,
        "last_login_days": 3
      },
      {
        "name": "cmdr.24003293",
        "ucid": "16020024003293",
        "channel": "李航",
        "server": "S24",
        "total_pay": 1042.79,
        "last_login_days": 5
      },
      {
        "name": "dutchie",
        "ucid": "16020023011439",
        "channel": "在水一方_JUR",
        "server": "S23",
        "total_pay": 600.08,
        "last_login_days": 6
      },
      {
        "name": "snowmann",
        "ucid": "16020023003892",
        "channel": "广州昊天游_JUR",
        "server": "S23",
        "total_pay": 726.54,
        "last_login_days": 3
      },
      {
        "name": "Prince",
        "ucid": "16020022007549",
        "channel": "发财团队_JUR",
        "server": "S22",
        "total_pay": 856.4,
        "last_login_days": 6
      },
      {
        "name": "cmdr.22005544",
        "ucid": "16020022005544",
        "channel": "雅典娜",
        "server": "S22",
        "total_pay": 806.57,
        "last_login_days": 3
      },
      {
        "name": "Carnage",
        "ucid": "16020021006637",
        "channel": "爱马仕",
        "server": "S21",
        "total_pay": 583.95,
        "last_login_days": 4
      },
      {
        "name": "Jaws",
        "ucid": "16020019005492",
        "channel": "李航",
        "server": "S19",
        "total_pay": 1372.43,
        "last_login_days": 6
      },
      {
        "name": "Morb",
        "ucid": "16020017010825",
        "channel": "广州昊天游_JUR",
        "server": "S17",
        "total_pay": 1677.9,
        "last_login_days": 3
      },
      {
        "name": "cmdr.17005950",
        "ucid": "16020017005950",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 906.65,
        "last_login_days": 4
      },
      {
        "name": "cmdr.17005701",
        "ucid": "16020017005701",
        "channel": "RS_JUR",
        "server": "S17",
        "total_pay": 655.12,
        "last_login_days": 4
      },
      {
        "name": "cmdr.16011067",
        "ucid": "16020016011067",
        "channel": "聚冠_JUR",
        "server": "S16",
        "total_pay": 785.94,
        "last_login_days": 4
      },
      {
        "name": "Izzy",
        "ucid": "16020016008095",
        "channel": "广州昊天游_JUR",
        "server": "S16",
        "total_pay": 2241.4,
        "last_login_days": 5
      },
      {
        "name": "hueS",
        "ucid": "16020015009600",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 2244.88,
        "last_login_days": 4
      },
      {
        "name": "JunNyx",
        "ucid": "16020015004499",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 8573.4,
        "last_login_days": 4
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 110.93,
        "before": 197.89,
        "delta": -0.4394,
        "days": 202
      },
      {
        "name": "S12",
        "yest": 264.3,
        "before": 9.98,
        "delta": 25.483,
        "days": 182
      },
      {
        "name": "S13",
        "yest": 238.45,
        "before": 189.97,
        "delta": 0.2552,
        "days": 168
      },
      {
        "name": "S14",
        "yest": 132.87,
        "before": 433.9,
        "delta": -0.6938,
        "days": 134
      },
      {
        "name": "S15",
        "yest": 331.0,
        "before": 0.0,
        "delta": 0.0,
        "days": 106
      },
      {
        "name": "S16",
        "yest": 120.88,
        "before": 8.99,
        "delta": 12.4461,
        "days": 92
      },
      {
        "name": "S17",
        "yest": 139.09,
        "before": 64.86,
        "delta": 1.1445,
        "days": 85
      },
      {
        "name": "S18",
        "yest": 227.21,
        "before": 168.51,
        "delta": 0.3483,
        "days": 78
      },
      {
        "name": "S19",
        "yest": 29.98,
        "before": 20.95,
        "delta": 0.431,
        "days": 71
      },
      {
        "name": "S20",
        "yest": 312.43,
        "before": 369.71,
        "delta": -0.1549,
        "days": 64
      },
      {
        "name": "S21",
        "yest": 259.6,
        "before": 168.44,
        "delta": 0.5412,
        "days": 57
      },
      {
        "name": "S22",
        "yest": 73.81,
        "before": 24.94,
        "delta": 1.9595,
        "days": 50
      },
      {
        "name": "S23",
        "yest": 1076.61,
        "before": 264.78,
        "delta": 3.0661,
        "days": 43
      },
      {
        "name": "S24",
        "yest": 571.09,
        "before": 247.75,
        "delta": 1.3051,
        "days": 36
      },
      {
        "name": "S25",
        "yest": 632.77,
        "before": 396.5,
        "delta": 0.5959,
        "days": 29
      },
      {
        "name": "S26",
        "yest": 2099.13,
        "before": 260.92,
        "delta": 7.0451,
        "days": 22
      },
      {
        "name": "S27",
        "yest": 1029.59,
        "before": 815.32,
        "delta": 0.2628,
        "days": 15
      },
      {
        "name": "S28",
        "yest": 240.67,
        "before": 299.37,
        "delta": -0.1961,
        "days": 9
      },
      {
        "name": "S29",
        "yest": 586.06,
        "before": 439.12,
        "delta": 0.3346,
        "days": 6
      },
      {
        "name": "S30",
        "yest": 957.75,
        "before": 605.4,
        "delta": 0.582,
        "days": 2
      }
    ]
  }
};
