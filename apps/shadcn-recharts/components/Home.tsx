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

// KEY A
const tokenData = [
  { month: "June", tokens: 186 },
  { month: "July", tokens: 305 },
  { month: "August", tokens: 237 },
  // { month: "September", tokens: 373 },
  { month: "September", tokens: 73 },
  // { month: "May", tokens: 209 },
  // { month: "June", tokens: 214 },
]

// KEY B
const tokenConfig = {
  tokens: {
    label: "Tokens",
    color: "hsl(var(--chart-2))",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "hsl(var(--chart-2))",
  // },
} satisfies ChartConfig

const interactionData = [
  { month: "May", interactions: 209 },
  { month: "June", interactions: 186 },
  { month: "July", interactions: 214 },
  { month: "August", interactions: 237 },
  { month: "September", interactions: 373 },
  // { month: "September", interactions: 73 },
]

const interactionConfig = {
  interactions: {
    label: "Interactions",
    color: "hsl(var(--chart-2))",
  }
} satisfies ChartConfig

export default function Home() {
  console.log('ga desde el home')
  // export default function Home() {

  //   const tokenData = useMemo(() => [
  //     { month: "June", tokens: 186 },
  //     { month: "July", tokens: 305 },
  //     { month: "August", tokens: 237 },
  //     { month: "September", tokens: 73 },
  // ], []);
  // const tokenData = await fetch('').then(res => res.json());

  // const tokenVariation = useMemo(() => {
  //   if (tokenData.length < 2) return 0;
  //   return (100 * (tokenData.at(-1)!.tokens - tokenData.at(-2)!.tokens) / tokenData.at(-2)!.tokens);
  // }, [tokenData]);

  const tokenVariation = useMemo(() => {
    if (tokenData.length < 2) return 0;
    return (100 * (tokenData.at(-1)!.tokens - tokenData.at(-2)!.tokens) / tokenData.at(-2)!.tokens);
  }, []);

  const interactionVariation = useMemo(() => {
    if (interactionData.length < 2) return 0;
    return (100 * (interactionData.at(-1)!.interactions - interactionData.at(-2)!.interactions) / interactionData.at(-2)!.interactions);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-between max-w-7xl mx-auto">
      <Card className="w-full lg:w-[calc(50%-1rem)]">
        <CardHeader className='text-left'>
          <CardTitle>Consumed Tokens</CardTitle>
          <CardDescription>{`${tokenData.at(0)?.month}`} 2024 - {`${tokenData.at(-1)?.month}`} 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={tokenConfig}>
            <LineChart
              accessibilityLayer
              data={tokenData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              {/* KEY A: monthdebe cooincir con el tokenData */}
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
              {/* KEY A: tokens debe coincidir con el tokenData */}
              {/* KEY B: el color se toma a partir del config tokens y no Tokens */}
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
            Trending {`${tokenVariation < 0 ? "down" : "up"}`} by {`${tokenVariation.toFixed(2)}`}% this month
            {tokenVariation < 0 ? <TrendingDown className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total tokens consumed for the last {`${tokenData.length}`} months
          </div>
        </CardFooter>
      </Card>

      <Card className="w-full lg:w-[calc(50%-1rem)]">
        <CardHeader className='text-left'>
          <CardTitle>Interacciones Realizadas</CardTitle>
          <CardDescription>{`${interactionData.at(0)?.month}`} - {`${interactionData.at(-1)?.month}`}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={interactionConfig}>
            <LineChart
              accessibilityLayer
              data={interactionData}
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
                dataKey="interactions"
                type="natural"
                stroke="var(--color-interactions)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-interactions)",
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
            Tendencia {`${interactionVariation < 0 ? "a la baja" : "a la alza"}`} un {`${interactionVariation.toFixed(2)}`}% este mes
            {interactionVariation < 0 ? <TrendingDown className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
          </div>
          <div className="leading-none text-muted-foreground">
            Gráfico lineal de las interacciones realizadas durante los últimos {`${interactionData.length}`} meses
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
