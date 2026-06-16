const DAILY_DATA = {
  "daily": {
    "date": "2026-06-15",
    "revenue": {
      "yesterday": 7094.25,
      "day_before": 5377.67,
      "delta": 0.3192,
      "avg7": 6599.98,
      "avg30": 5605.81
    },
    "register": {
      "yesterday": 317,
      "day_before": 53,
      "delta": 4.9811,
      "avg7": 337,
      "avg30": 296
    },
    "new_payers": {
      "yesterday": 53,
      "day_before": 26,
      "delta": 1.0385,
      "avg7": 55,
      "avg30": 54
    },
    "new_pay_rate": {
      "yesterday": 0.1672,
      "day_before": 0.4906,
      "delta": -0.3234,
      "avg7": 0.2052,
      "avg30": 0.2144
    },
    "summary": "营收异常(+31.9%)；注册异常(+498.1%)；新增付费异常(+103.8%)",
    "channel_rev": [
      {
        "name": "聚冠_JUR",
        "val": 1588.42
      },
      {
        "name": "梵克雅宝",
        "val": 1257.02
      },
      {
        "name": "雅典娜",
        "val": 1073.78
      },
      {
        "name": "厄洛斯",
        "val": 900.09
      },
      {
        "name": "在水一方_JUR",
        "val": 602.5
      }
    ],
    "channel_reg_top5": [
      {
        "name": "聚冠_JUR",
        "val": 42
      },
      {
        "name": "梵克雅宝",
        "val": 40
      },
      {
        "name": "laoxia_JUR",
        "val": 34
      },
      {
        "name": "郑州未界发财_JUR",
        "val": 26
      },
      {
        "name": "弑神阁",
        "val": 26
      }
    ],
    "anomaly_channels": [
      {
        "name": "精聊發發發团队",
        "yest": 127.9,
        "before": 204.51,
        "delta": -0.3746,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "无",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [],
    "churn_alert": [
      {
        "name": "LAWDAWG",
        "ucid": "16020021004111",
        "channel": "广亮_JUR",
        "server": "S21",
        "total_pay": 970.34,
        "last_login_days": 5
      },
      {
        "name": "21Epic",
        "ucid": "16020021003323",
        "channel": "长沙哈迪斯_JUR",
        "server": "S21",
        "total_pay": 702.46,
        "last_login_days": 3
      },
      {
        "name": "XXX",
        "ucid": "16020017007289",
        "channel": "厄洛斯",
        "server": "S17",
        "total_pay": 654.17,
        "last_login_days": 5
      },
      {
        "name": "cmdr.17005701",
        "ucid": "16020017005701",
        "channel": "RS_JUR",
        "server": "S17",
        "total_pay": 655.12,
        "last_login_days": 5
      },
      {
        "name": "ClIx",
        "ucid": "16020017003303",
        "channel": "郑州未界发财_JUR",
        "server": "S17",
        "total_pay": 4085.53,
        "last_login_days": 4
      },
      {
        "name": "Anakin",
        "ucid": "16020016011136",
        "channel": "天津简游发财_JUR",
        "server": "S16",
        "total_pay": 1409.07,
        "last_login_days": 3
      },
      {
        "name": "cmdr.16011067",
        "ucid": "16020016011067",
        "channel": "聚冠_JUR",
        "server": "S16",
        "total_pay": 785.94,
        "last_login_days": 3
      },
      {
        "name": "Colera",
        "ucid": "16020015010527",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 1041.23,
        "last_login_days": 4
      },
      {
        "name": "hueS",
        "ucid": "16020015009600",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 2244.88,
        "last_login_days": 3
      },
      {
        "name": "Khey",
        "ucid": "16020015004082",
        "channel": "广州昊天游_JUR",
        "server": "S15",
        "total_pay": 3075.31,
        "last_login_days": 5
      },
      {
        "name": "cmdr.14003231",
        "ucid": "16020014003231",
        "channel": "聚冠_JUR",
        "server": "S14",
        "total_pay": 1272.17,
        "last_login_days": 3
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 1186.92,
        "before": 63.93,
        "delta": 17.5659,
        "days": 180
      },
      {
        "name": "S12",
        "yest": 19.96,
        "before": 234.96,
        "delta": -0.915,
        "days": 160
      },
      {
        "name": "S13",
        "yest": 206.41,
        "before": 210.92,
        "delta": -0.0214,
        "days": 146
      },
      {
        "name": "S14",
        "yest": 388.95,
        "before": 684.84,
        "delta": -0.4321,
        "days": 112
      },
      {
        "name": "S15",
        "yest": 20.97,
        "before": 39.21,
        "delta": -0.4652,
        "days": 84
      },
      {
        "name": "S16",
        "yest": 94.87,
        "before": 149.84,
        "delta": -0.3669,
        "days": 70
      },
      {
        "name": "S17",
        "yest": 182.15,
        "before": 331.45,
        "delta": -0.4504,
        "days": 63
      },
      {
        "name": "S18",
        "yest": 110.56,
        "before": 213.53,
        "delta": -0.4822,
        "days": 56
      },
      {
        "name": "S19",
        "yest": 30.13,
        "before": 17.96,
        "delta": 0.6776,
        "days": 49
      },
      {
        "name": "S20",
        "yest": 703.68,
        "before": 215.73,
        "delta": 2.2619,
        "days": 42
      },
      {
        "name": "S21",
        "yest": 166.78,
        "before": 416.63,
        "delta": -0.5997,
        "days": 35
      },
      {
        "name": "S22",
        "yest": 112.87,
        "before": 155.82,
        "delta": -0.2756,
        "days": 28
      },
      {
        "name": "S23",
        "yest": 1802.79,
        "before": 969.58,
        "delta": 0.8594,
        "days": 21
      },
      {
        "name": "S24",
        "yest": 510.82,
        "before": 597.08,
        "delta": -0.1445,
        "days": 14
      },
      {
        "name": "S25",
        "yest": 1468.62,
        "before": 937.51,
        "delta": 0.5665,
        "days": 7
      },
      {
        "name": "S26",
        "yest": NaN,
        "before": NaN,
        "delta": 0,
        "days": 0
      },
      {
        "name": "S45",
        "yest": 19.98,
        "before": 0.0,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S114",
        "yest": 0.0,
        "before": 9.97,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S148",
        "yest": 0.99,
        "before": 0.99,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S150",
        "yest": 2.99,
        "before": 0.99,
        "delta": 2.0202,
        "days": 0
      },
      {
        "name": "S151",
        "yest": 0.99,
        "before": 0.0,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S155",
        "yest": 0.99,
        "before": 0.0,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S156",
        "yest": 0.0,
        "before": 0.99,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S158",
        "yest": 0.99,
        "before": 0.0,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S159",
        "yest": 0.0,
        "before": 31.98,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S160",
        "yest": 8.97,
        "before": 5.96,
        "delta": 0.505,
        "days": 0
      },
      {
        "name": "S166",
        "yest": 0.0,
        "before": 16.98,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S171",
        "yest": 0.0,
        "before": 6.98,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S175",
        "yest": 0.99,
        "before": 0.0,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S177",
        "yest": 0.99,
        "before": 1.98,
        "delta": -0.5,
        "days": 0
      },
      {
        "name": "S187",
        "yest": 24.98,
        "before": 19.99,
        "delta": 0.2496,
        "days": 0
      },
      {
        "name": "S191",
        "yest": 1.99,
        "before": 0.0,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S195",
        "yest": 0.99,
        "before": 1.98,
        "delta": -0.5,
        "days": 0
      },
      {
        "name": "S196",
        "yest": 13.96,
        "before": 13.96,
        "delta": 0.0,
        "days": 0
      },
      {
        "name": "S197",
        "yest": 4.99,
        "before": 0.99,
        "delta": 4.0404,
        "days": 0
      },
      {
        "name": "S198",
        "yest": 0.99,
        "before": 3.97,
        "delta": -0.7506,
        "days": 0
      }
    ]
  }
};
