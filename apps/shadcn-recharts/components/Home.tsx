"use client"

import { TrendingDown, TrendingUp } from 'lucide-react';
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from 'react';

export const description = "A line chart with a label"

const chartData = [
  { month: "June", tokens: 186, mobile: 80 },
  { month: "July", tokens: 305, mobile: 200 },
  { month: "August", tokens: 237, mobile: 120 },
  // { month: "September", tokens: 373, mobile: 190 },
  { month: "September", tokens: 73, mobile: 190 },
  // { month: "May", tokens: 209, mobile: 130 },
  // { month: "June", tokens: 214, mobile: 140 },
]

const chartConfig = {
  tokens: {
    label: "Tokens",
    color: "hsl(var(--chart-2))",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "hsl(var(--chart-2))",
  // },
} satisfies ChartConfig

export default function Home() {
  const variation = useMemo(() => (100 * (chartData.at(-1)!.tokens - chartData.at(-2)!.tokens) / chartData.at(-2)!.tokens), [chartData])

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className='text-left'>
        <CardTitle>Consumed Tokens</CardTitle>
        <CardDescription>{`${chartData.at(0)?.month}`} 2024 - {`${chartData.at(-1)?.month}`} 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="tokens"
              type="natural"
              stroke="var(--color-tokens)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-tokens)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending {`${variation < 0 ? "down" : "up"}`} by {`${variation.toFixed(2)}`}% this month
          {variation < 0 ? <TrendingDown className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total tokens consumed for the last {`${chartData.length}`} months
        </div>
      </CardFooter>
    </Card>
  )
}
