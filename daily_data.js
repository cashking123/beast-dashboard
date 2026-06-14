const DAILY_DATA = {
  "daily": {
    "date": "2026-06-13",
    "revenue": {
      "yesterday": 6857.54,
      "day_before": 7083.18,
      "delta": -0.0319,
      "avg7": 6256.06,
      "avg30": 5430.82
    },
    "register": {
      "yesterday": 296,
      "day_before": 371,
      "delta": -0.2022,
      "avg7": 332,
      "avg30": 300
    },
    "new_payers": {
      "yesterday": 69,
      "day_before": 77,
      "delta": -0.1039,
      "avg7": 54,
      "avg30": 53
    },
    "new_pay_rate": {
      "yesterday": 0.2331,
      "day_before": 0.2075,
      "delta": 0.0256,
      "avg7": 0.1967,
      "avg30": 0.2028
    },
    "summary": "营收正常(-3.2%)；注册异常(-20.2%)；新增付费正常(-10.4%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 2305.07
      },
      {
        "name": "厄洛斯",
        "val": 795.9
      },
      {
        "name": "聚冠_JUR",
        "val": 628.94
      },
      {
        "name": "在水一方_JUR",
        "val": 590.5
      },
      {
        "name": "西安玩趣发财_JUR",
        "val": 539.35
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 44
      },
      {
        "name": "laoxia_JUR",
        "val": 34
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 22
      },
      {
        "name": "聚冠_JUR",
        "val": 20
      },
      {
        "name": "郑州未界发财_JUR",
        "val": 19
      }
    ],
    "anomaly_channels": [
      {
        "name": "郑州未界发财_JUR",
        "yest": 156.89,
        "before": 1427.79,
        "delta": -0.8901,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 888.95,
          "big_r_churn": 0,
          "reg_drop": 63.04,
          "quality_drop": 0,
          "big_r_names": "ClIx: $380→$0(-$380), Yor: $255→$0(-$255), cmdr.25003234: $245→$0(-$245)",
          "churn_names": "无"
        }
      },
      {
        "name": "雅典娜",
        "yest": 293.6,
        "before": 465.72,
        "delta": -0.3696,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 251.95,
          "big_r_churn": 0,
          "reg_drop": 174.76,
          "quality_drop": 0,
          "big_r_names": "TOASTbread: $244→$5(-$239), cmdr.22005544: $48→$35(-$13)",
          "churn_names": "无"
        }
      },
      {
        "name": "厄洛斯",
        "yest": 795.9,
        "before": 1198.97,
        "delta": -0.3362,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 573.93,
          "big_r_churn": 0,
          "reg_drop": 173.02,
          "quality_drop": 0,
          "big_r_names": "Slays: $237→$0(-$237), Xyawey: $190→$30(-$160), Putte: $100→$0(-$100)",
          "churn_names": "XXX, MJS, cmdr.15013471, SolarX"
        }
      },
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 152.8,
        "before": 206.58,
        "delta": -0.2603,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 2.97,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "cmdr.21005887: $3→$0(-$3)",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "李航",
        "yest": 11,
        "before": 22,
        "delta": -0.5,
        "reason": "量跌"
      },
      {
        "name": "雅典娜",
        "yest": 11,
        "before": 21,
        "delta": -0.4762,
        "reason": "量跌"
      },
      {
        "name": "厄洛斯",
        "yest": 14,
        "before": 23,
        "delta": -0.3913,
        "reason": "量跌"
      },
      {
        "name": "卡地亚巨兽",
        "yest": 8,
        "before": 12,
        "delta": -0.3333,
        "reason": "量跌"
      },
      {
        "name": "郑州未界发财_JUR",
        "yest": 19,
        "before": 28,
        "delta": -0.3214,
        "reason": "量跌"
      },
      {
        "name": "克罗心SX",
        "yest": 11,
        "before": 16,
        "delta": -0.3125,
        "reason": "量跌"
      },
      {
        "name": "精聊發發發团队",
        "yest": 7,
        "before": 10,
        "delta": -0.3,
        "reason": "量跌"
      },
      {
        "name": "香奈儿GD",
        "yest": 13,
        "before": 18,
        "delta": -0.2778,
        "reason": "量跌"
      },
      {
        "name": "西安玩趣发财_JUR",
        "yest": 10,
        "before": 13,
        "delta": -0.2308,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "Excaliverr",
        "ucid": "16020021009963",
        "channel": "聚冠_JUR",
        "server": "S21",
        "total_pay": 530.54,
        "last_login_days": 5
      },
      {
        "name": "LAWDAWG",
        "ucid": "16020021004111",
        "channel": "广亮_JUR",
        "server": "S21",
        "total_pay": 970.34,
        "last_login_days": 3
      },
      {
        "name": "cmdr.20005369",
        "ucid": "16020020005369",
        "channel": "聚冠_JUR",
        "server": "S20",
        "total_pay": 1275.12,
        "last_login_days": 6
      },
      {
        "name": "Jaws",
        "ucid": "16020019005492",
        "channel": "李航",
        "server": "S19",
        "total_pay": 1317.48,
        "last_login_days": 4
      },
      {
        "name": "XXX",
        "ucid": "16020017007289",
        "channel": "厄洛斯",
        "server": "S17",
        "total_pay": 654.17,
        "last_login_days": 4
      },
      {
        "name": "cmdr.17005950",
        "ucid": "16020017005950",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 906.65,
        "last_login_days": 6
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
        "name": "MJS",
        "ucid": "16020016008215",
        "channel": "厄洛斯",
        "server": "S16",
        "total_pay": 1180.53,
        "last_login_days": 6
      },
      {
        "name": "Izzy",
        "ucid": "16020016008095",
        "channel": "广州昊天游_JUR",
        "server": "S16",
        "total_pay": 2241.4,
        "last_login_days": 3
      },
      {
        "name": "cmdr.16005137",
        "ucid": "16020016005137",
        "channel": "广州昊天游_JUR",
        "server": "S16",
        "total_pay": 545.84,
        "last_login_days": 4
      },
      {
        "name": "cmdr.15013471",
        "ucid": "16020015013471",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 6792.28,
        "last_login_days": 3
      },
      {
        "name": "Dragon",
        "ucid": "16020015006007",
        "channel": "西安玩趣发财_JUR ",
        "server": "S15",
        "total_pay": 11105.91,
        "last_login_days": 6
      },
      {
        "name": "cmdr.15004207",
        "ucid": "16020015004207",
        "channel": "发财团队_JUR",
        "server": "S15",
        "total_pay": 5518.59,
        "last_login_days": 5
      },
      {
        "name": "Khey",
        "ucid": "16020015004082",
        "channel": "广州昊天游_JUR",
        "server": "S15",
        "total_pay": 3075.31,
        "last_login_days": 3
      },
      {
        "name": "SolarX",
        "ucid": "16020014010963",
        "channel": "厄洛斯",
        "server": "S14",
        "total_pay": 678.49,
        "last_login_days": 3
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 123.92,
        "before": 138.93,
        "delta": -0.108,
        "days": 178
      },
      {
        "name": "S12",
        "yest": 137.43,
        "before": 14.48,
        "delta": 8.491,
        "days": 158
      },
      {
        "name": "S13",
        "yest": 17.98,
        "before": 246.46,
        "delta": -0.927,
        "days": 144
      },
      {
        "name": "S14",
        "yest": 691.82,
        "before": 550.87,
        "delta": 0.2559,
        "days": 110
      },
      {
        "name": "S15",
        "yest": 24.97,
        "before": 13.49,
        "delta": 0.851,
        "days": 82
      },
      {
        "name": "S16",
        "yest": 69.9,
        "before": 215.94,
        "delta": -0.6763,
        "days": 68
      },
      {
        "name": "S17",
        "yest": 99.99,
        "before": 605.56,
        "delta": -0.8349,
        "days": 61
      },
      {
        "name": "S18",
        "yest": 350.59,
        "before": 205.87,
        "delta": 0.703,
        "days": 54
      },
      {
        "name": "S19",
        "yest": 9.99,
        "before": 121.1,
        "delta": -0.9175,
        "days": 47
      },
      {
        "name": "S20",
        "yest": 570.64,
        "before": 195.6,
        "delta": 1.9174,
        "days": 40
      },
      {
        "name": "S21",
        "yest": 116.84,
        "before": 389.76,
        "delta": -0.7002,
        "days": 33
      },
      {
        "name": "S22",
        "yest": 209.61,
        "before": 797.57,
        "delta": -0.7372,
        "days": 26
      },
      {
        "name": "S23",
        "yest": 2160.92,
        "before": 1167.15,
        "delta": 0.8515,
        "days": 19
      },
      {
        "name": "S24",
        "yest": 577.01,
        "before": 989.86,
        "delta": -0.4171,
        "days": 12
      },
      {
        "name": "S25",
        "yest": 1693.94,
        "before": 1423.56,
        "delta": 0.1899,
        "days": 5
      }
    ]
  }
};
