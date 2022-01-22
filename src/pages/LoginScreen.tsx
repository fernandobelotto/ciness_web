import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../components/Logo";

export default function LoginScreen() {
  function handleSubmit(values: any, { setSubmitting }: any) {
    console.log("values", values);
    setSubmitting(false);
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("brand.50", "brand.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Logo />
            {/* <Heading fontSize={"4xl"}>Sign in</Heading>
            <Text fontSize={"lg"} color={"brand.600"}>
              to enjoy all of our cool features ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "brand.700")}
            boxShadow={"lg"}
            width={"md"}
            p={8}
          >
            <Stack spacing={4}>

              <FormControl
              // isInvalid={form.errors.email && form.touched.email}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input

                  id="email"
                  type="email"
                  placeholder="email"
                />
                <FormErrorMessage>
                  {/* {form.errors.email} */}
                </FormErrorMessage>
              </FormControl>
              <FormControl
              // isInvalid={
              //   form.errors.password && form.touched.password
              // }
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                />
                <FormErrorMessage>
                  {/* {form.errors.password} */}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  {/* <Checkbox>Remember me</Checkbox> */}

                  <RouterLink to="/recover">
                    Forgot password?
                  </RouterLink>
                </Stack>
                <Button
                  // disabled={props.isSubmitting}
                  type="submit"
                  colorScheme={"brand"}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Not a user? <RouterLink to="signup">Register</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex >
    </>
  );
}
