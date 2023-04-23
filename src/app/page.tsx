"use client";

import LeagueDetails from "@/components/contexts/Leagues/LeagueDetails/LeagueDetails";
import { getLeagues } from "@/services/requests/leagues";
import { Box, Container, Skeleton, Tab, Tabs } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import Image from "next/image";

export default function Home() {
  const { data: leagues } = useQuery({
    queryKey: ["leagues"],
    queryFn: () => getLeagues(),
  });

  const [value, setValue] = useState("");

  const handleChange = (
    _event: React.SyntheticEvent | null,
    newValue: string
  ) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (leagues && leagues.length > 0) {
      handleChange(null, leagues[0].code);
    }
  }, [leagues]);

  if (!leagues) {
    return (
      <Container>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Skeleton animation="wave" width="100%" height={90} />
            </Tabs>

            <TabPanel value={value}>
              <LeagueDetails code={value} />
            </TabPanel>
          </Box>
        </TabContext>
      </Container>
    );
  }

  return (
    <Container>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            {leagues?.map((league) => {
              return (
                <Tab
                  key={league.id}
                  label={league.code}
                  value={league.code}
                  icon={
                    <Image
                      src={league.emblem}
                      width={24}
                      height={24}
                      alt="League Emblem"
                    />
                  }
                  iconPosition="start"
                />
              );
            })}
          </Tabs>

          <TabPanel value={value}>
            <LeagueDetails code={value} />
          </TabPanel>
        </Box>
      </TabContext>
    </Container>
  );
}
