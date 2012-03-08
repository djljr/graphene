(function() {
  var description;
  var from = 0;
  var to = 1200;
  description = {
      /*
    "UI Load": {
      source: "http://metrics.corp.natpal.com/render?target=alias(yodle.YodleLive.ui-3-prod-yodle-com.pageLoadTime.aggregate.all.5MinuteRte,\"ui-3\")&target=alias(yodle.YodleLive.ui-4-prod-yodle-com.pageLoadTime.aggregate.all.5MinuteRate,\"ui-4\")&target=alias(yodle.YodleLive.ui-5.pageLoadTime.aggregate.all.5MinuteRate,\"ui-5\")&target=alias(yodle.YodleLive.nyc-colo-ui6.pageLoadTime.aggregate.all.5MinuteRate,\"ui-6\")&target=alias(yodle.YodleLive.nyc-colo-ui7.pageLoadTime.aggregate.all.5MinuteRate,\"ui-7\")&from=-6hours&vtitle=req/min&title=Prod UI Request Load&fontName=Helvetica&fontSize=18&format=json",
      TimeSeries: {
        parent: "#hero-one",
        width: 600,
        height: 400,
        num_labels: 5,
        title: "Prod UI Request Load",
      }
    },
    */
    'UI-3 Gauge': {
        source: 'http://metrics.corp.natpal.com/render?target=yodle.YodleLive.ui-3-prod-yodle-com.pageLoadTime.aggregate.all.5MinuteRate&format=json',
        GaugeGadget: {
            parent: '#hero-one',
            title: 'ui-3',
            from: from,
            to: to
        }
    },
    'UI-4 Gauge': {
        source: 'http://metrics.corp.natpal.com/render?target=yodle.YodleLive.ui-4-prod-yodle-com.pageLoadTime.aggregate.all.5MinuteRate&format=json',
        GaugeGadget: {
            parent: '#hero-one',
            title: 'ui-4',
            from: from,
            to: to
        }
    },
    'UI-5 Gauge': {
        source: 'http://metrics.corp.natpal.com/render?target=yodle.YodleLive.ui-5.pageLoadTime.aggregate.all.5MinuteRate&format=json',
        GaugeGadget: {
            parent: '#hero-one',
            title: 'ui-5',
            from: from,
            to: to
        }
    },
    'UI-6 Gauge': {
        source: 'http://metrics.corp.natpal.com/render?target=yodle.YodleLive.nyc-colo-ui6.pageLoadTime.aggregate.all.5MinuteRate&format=json',
        GaugeGadget: {
            parent: '#hero-one',
            title: 'ui-6',
            from: from,
            to: to
        }
    },
    'UI-7 Gauge': {
        source: 'http://metrics.corp.natpal.com/render?target=yodle.YodleLive.nyc-colo-ui7.pageLoadTime.aggregate.all.5MinuteRate&format=json',
        GaugeGadget: {
            parent: '#hero-one',
            title: 'ui-7',
            from: from,
            to: to
        }
    }
  };


  var g = new Graphene;
  g.build(description);


}).call(this);
